varying vec3 v_position;
uniform float u_time;

float rect(vec2 pt, vec2 size, vec2 center) {
    vec2 p = pt - center;
    vec2 halfsize = size / 2.0;

    float horz = step(-halfsize.x, p.x) - step(halfsize.x, p.x);
    float vert = step(-halfsize.y, p.y) - step(halfsize.y, p.y);

    return horz * vert;
}

void main() {
    float radius = 0.5;
    float time = u_time * 2.0;
    vec2 center = vec2(cos(time) * radius, sin(time) * radius);
    float inRect = rect(v_position.xy, vec2(0.5), center);

    vec3 color = vec3(1.0, 1.0, 0.0) * inRect;
    gl_FragColor = vec4(color, 1.0);
}