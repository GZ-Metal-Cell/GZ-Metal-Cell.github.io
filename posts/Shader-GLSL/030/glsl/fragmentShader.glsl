#define PI 3.141592653589
#define PI2 6.28318530718

uniform float u_time;
uniform float u_duration;
uniform sampler2D u_tex;

varying vec2 vUv;
varying vec3 vPosition;

void main(void) {
    float len = length(vPosition.xy);
    vec2 ripple = vUv + vPosition.xy / len * 0.03 * cos(len * 12.0 - u_time * 4.0);
    float delta = (((sin(u_time) + 1.0) / 2.0) * u_duration) / u_duration;
    vec2 uv = mix(ripple, vUv, delta);
    vec3 color = texture2D(u_tex, uv).rgb;
    gl_FragColor = vec4(color, 1.0);
}