#define PI 3.141592653589
#define PI2 6.28318530718

uniform float u_time;
uniform sampler2D u_tex;

varying vec2 vUv;

vec2 rotate(vec2 pt, float theta) {
    float c = cos(theta);
    float s = sin(theta);
    float aspect = 2.0 / 1.5;
    mat2 mat = mat2(c, s, -s, c);
    pt.y /= aspect;
    pt = mat * pt;
    pt.y *= aspect;
    return pt;
}

void main(void) {
    vec2 uv = vUv;
    uv -= vec2(0.5);
    uv = rotate(uv, u_time);
    uv += vec2(0.5);
    vec3 color;
    if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        color = vec3(0.0);
    } else {
        color = texture2D(u_tex, uv).rgb;
    }
    gl_FragColor = vec4(color, 1.0);
}