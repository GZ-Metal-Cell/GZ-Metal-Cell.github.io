#define PI 3.141592653589
#define PI2 6.28318530718

uniform float u_time;
uniform float u_duration;
uniform sampler2D u_tex_1;
uniform sampler2D u_tex_2;

varying vec2 vUv;

void main(void) {
    vec2 p = -1.0 + 2.0 * vUv;
    float len = length(p);
    vec2 ripple = vUv + (p / len) * cos(len * 12.0 - u_time * 4.0) * 0.03;
    float delta = u_time / u_duration;
    vec2 uv = mix(ripple, vUv, delta);
    vec3 col1 = texture2D(u_tex_1, uv).rgb;
    vec3 col2 = texture2D(u_tex_2, uv).rgb;
    float fade = smoothstep(delta * 1.4, delta * 2.5, len);
    vec3 color = mix(col2, col1, fade);
    gl_FragColor = vec4(color, 1.0);
}