varying vec2 v_uv;
uniform float u_time;

mat2 getRoationMatrix(float theta) {
    float s = sin(theta);
    float c = cos(theta);
    return mat2(c, -s, s, c);
}

float rect(vec2 pt, vec2 size, vec2 center) {
    vec2 p = pt - center;
    vec2 halfsize = size / 2.0;

    float horz = step(-halfsize.x, p.x) - step(halfsize.x, p.x);
    float vert = step(-halfsize.y, p.y) - step(halfsize.y, p.y);

    return horz * vert;
}

void main() {
    float tilecount = 6.0;
    vec2 center = vec2(0.5);
    mat2 mat = getRoationMatrix(u_time);
    vec2 p = fract(v_uv * tilecount);
    vec2 pt = (mat * (p - center)) + center;
    float inRect = rect(pt, vec2(0.5), center);

    vec3 color = vec3(1.0, 1.0, 0.0) * inRect;
    gl_FragColor = vec4(color, 1.0);
}