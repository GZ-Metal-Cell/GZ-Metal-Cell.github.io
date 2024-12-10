uniform vec3 u_LightColor;
uniform vec3 u_DarkColor;
uniform float u_Frequency;
uniform float u_NoiseScale;
uniform float u_RingScale;
uniform float u_Contrast;

varying vec3 vPosition;

#include <noise>

void main(){
  float n = snoise( vPosition );
  float ring = fract( u_Frequency * vPosition.z + u_NoiseScale * n );
  ring *= u_Contrast * ( 1.0 - ring );

  // Adjust ring smoothness and shape, and add some noise
  float lerp = pow( ring, u_RingScale ) + n;
  vec3 color = mix(u_DarkColor, u_LightColor, lerp);

  gl_FragColor = vec4(color, 1.0);
}