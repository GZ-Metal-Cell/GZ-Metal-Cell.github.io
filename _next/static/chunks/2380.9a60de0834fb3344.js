"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2380],{1548:(t,e,a)=>{a.d(e,{g:()=>r});var f=a(80863);let r=[];r[f.K.NONE]=void 0,r[f.K.DISABLED]={stencilWriteMask:0,stencilReadMask:0},r[f.K.RENDERING_MASK_ADD]={stencilFront:{compare:"equal",passOp:"increment-clamp"},stencilBack:{compare:"equal",passOp:"increment-clamp"}},r[f.K.RENDERING_MASK_REMOVE]={stencilFront:{compare:"equal",passOp:"decrement-clamp"},stencilBack:{compare:"equal",passOp:"decrement-clamp"}},r[f.K.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}},r[f.K.INVERSE_MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"not-equal",passOp:"keep"},stencilBack:{compare:"not-equal",passOp:"keep"}}},13047:(t,e,a)=>{a.d(e,{Ls:()=>f,_Q:()=>r,mA:()=>o});let f={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},r={...f,vertex:{...f.vertex,header:f.vertex.header.replace("group(1)","group(2)")}},o={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}}},18847:(t,e,a)=>{a.d(e,{d:()=>o});var f=a(4154),r=a(58907);class o extends f.A{constructor({buffer:t,offset:e,size:a}){super(),this.uid=(0,r.L)("buffer"),this._resourceType="bufferResource",this._resourceId=(0,r.L)("resource"),this._bufferResource=!0,this.destroyed=!1,this.buffer=t,this.offset=0|e,this.size=a,this.buffer.on("change",this.onBufferChange,this)}get _gcLastUsed(){return this.buffer?._gcLastUsed??-1}set _gcLastUsed(t){this.buffer&&(this.buffer._gcLastUsed=t)}onBufferChange(){this._resourceId=(0,r.L)("resource"),this.emit("change",this)}destroy(t=!1){this.destroyed=!0,t&&this.buffer.destroy(),this.emit("change",this),this.buffer=null,this.removeAllListeners()}}},20850:(t,e,a)=>{a.d(e,{D:()=>r});var f=a(30084);function r(t,e,a){let r=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `],o=0;for(let s=0;s<t.length;s++){let n=t[s],i=n.data.name,u=!1,v=0;for(let t=0;t<f.$.length;t++)if(f.$[t].test(n.data)){v=n.offset/4,r.push(`name = "${i}";`,`offset += ${v-o};`,f.$[t].ubo),u=!0;break}if(!u)if(n.data.size>1)v=n.offset/4,r.push(a(n,v-o));else{let t=e[n.data.type];v=n.offset/4,r.push(`
                    v = uv.${i};
                    offset += ${v-o};
                    ${t};
                `)}o=v}return Function("uv","data","dataInt32","offset",r.join("\n"))}},27387:(t,e,a)=>{a.d(e,{W:()=>s});var f=a(61949),r=a(98931),o=a(24764);class s{constructor(t){this._syncFunctionHash=Object.create(null),this._adaptor=t,this._systemCheck()}_systemCheck(){if(!(0,f.f)())throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}ensureUniformGroup(t){let e=this.getUniformGroupData(t);t.buffer||(t.buffer=new r.h({data:new Float32Array(e.layout.size/4),usage:o.S.UNIFORM|o.S.COPY_DST}))}getUniformGroupData(t){return this._syncFunctionHash[t._signature]||this._initUniformGroup(t)}_initUniformGroup(t){let e=t._signature,a=this._syncFunctionHash[e];if(!a){let f=Object.keys(t.uniformStructures).map(e=>t.uniformStructures[e]),r=this._adaptor.createUboElements(f),o=this._generateUboSync(r.uboElements);a=this._syncFunctionHash[e]={layout:r,syncFunction:o}}return this._syncFunctionHash[e]}_generateUboSync(t){return this._adaptor.generateUboSync(t)}syncUniformGroup(t,e,a){let f=this.getUniformGroupData(t);t.buffer||(t.buffer=new r.h({data:new Float32Array(f.layout.size/4),usage:o.S.UNIFORM|o.S.COPY_DST}));let s=null;return e||(e=t.buffer.data,s=t.buffer.dataInt32),a||(a=0),f.syncFunction(t.uniforms,e,s,a),!0}updateUniformGroup(t){if(t.isStatic&&!t._dirtyId)return!1;t._dirtyId=0;let e=this.syncUniformGroup(t);return t.buffer.update(),e}destroy(){this._syncFunctionHash=null}}},30084:(t,e,a)=>{a.d(e,{$:()=>f});let f=[{type:"mat3x3<f32>",test:t=>void 0!==t.value.a,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:"vec4<f32>",test:t=>"vec4<f32>"===t.type&&1===t.size&&void 0!==t.value.width,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:"vec2<f32>",test:t=>"vec2<f32>"===t.type&&1===t.size&&void 0!==t.value.x,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:"vec4<f32>",test:t=>"vec4<f32>"===t.type&&1===t.size&&void 0!==t.value.red,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:"vec3<f32>",test:t=>"vec3<f32>"===t.type&&1===t.size&&void 0!==t.value.red,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}]},41871:(t,e,a)=>{a.d(e,{J:()=>f});function f(t,e,a,f,r){if((t=Math.max(0,t))>=(e=Math.min(e,a*f)))return 0;let o=Math.floor(t/a),s=t-o*a,n=Math.floor(e/a),i=e-n*a;if(o===n)return r[0].set(s,o,i-s,1),1;let u=0,v=o;return s>0&&(r[u++].set(s,o,a-s,1),v++),n>v&&r[u++].set(0,v,a,n-v),i>0&&r[u++].set(0,n,i,1),u}},59685:(t,e,a)=>{a.d(e,{R:()=>f,m:()=>r});let f={name:"texture-bit",vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;


        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},r={name:"texture-bit",vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;


        `,main:`
            outColor = texture(uTexture, vUV);
        `}}},93116:(t,e,a)=>{function f(t,e){return`
        for (let i = 0; i < ${t*e}; i++) {
            data[offset + (((i / ${t})|0) * 4) + (i % ${t})] = v[i];
        }
    `}a.d(e,{_:()=>o,g:()=>r});let r={f32:`
        data[offset] = v;`,i32:`
        dataInt32[offset] = v;`,u32:`
        dataInt32[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"vec2<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`,"vec3<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`,"vec4<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`,"vec2<u32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`,"vec3<u32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`,"vec4<u32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":f(3,2),"mat4x2<f32>":f(4,2),"mat2x3<f32>":f(2,3),"mat4x3<f32>":f(4,3),"mat2x4<f32>":f(2,4),"mat3x4<f32>":f(3,4)},o={...r,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `}},95078:(t,e,a)=>{a.d(e,{q:()=>o});var f=a(72198),r=a(84080);function o(t,e){for(let a in t.attributes){let r=t.attributes[a],o=e[a];o?(r.format??(r.format=o.format),r.offset??(r.offset=o.offset),r.instance??(r.instance=o.instance)):r.format||(0,f.R)(`Attribute ${a} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}!function(t){let{buffers:e,attributes:a}=t,f={},o={};for(let t in e){let a=e[t];f[a.uid]=0,o[a.uid]=0}for(let t in a){let e=a[t];f[e.buffer.uid]+=(0,r.m)(e.format).stride}for(let t in a){let e=a[t];e.stride??(e.stride=f[e.buffer.uid]),e.start??(e.start=o[e.buffer.uid]),o[e.buffer.uid]+=(0,r.m)(e.format).stride}}(t)}}}]);