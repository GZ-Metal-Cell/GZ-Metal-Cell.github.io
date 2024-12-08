varying vec3 v_position;

void main() {
    vec3 color = vec3(v_position.x, v_position.y, 0.0);
    gl_FragColor = vec4(color, 1.0);
}