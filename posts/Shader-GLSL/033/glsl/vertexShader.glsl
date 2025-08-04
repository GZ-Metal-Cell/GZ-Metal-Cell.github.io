uniform float u_time;
uniform float u_radius;

void main() {
    float delta = ((sin(u_time) + 1.0) / 2.0);

    vec3 v = normalize(position) * u_radius;
    vec3 pos = mix(position, v, delta);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
