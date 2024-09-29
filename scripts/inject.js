GameManager.codeManager.setLocationAction("ArrowShader.makeFragmentShader", function (){
    return "\n    precision lowp float;\n\n    varying vec2 v_texcoord;\n\n    uniform sampler2D u_texture;\n    uniform float u_alpha;\n    uniform int u_signal;\n    uniform vec2 u_spritePosition;\n    uniform float u_spriteSize;\n\n    const vec2 border = vec2(0.475);\n\n    void main() {\n      vec4 signalColors[6];\n      vec4 signalColor;\n      if (u_signal == 0) signalColor = vec4(0.0, 0.0, 0.0, 1.0);\n      if (u_signal == 1) signalColor = vec4(1.0, 0.0, 0.0, 1.0);\n      if (u_signal == 2) signalColor = vec4(0.3, 0.5, 1.0, 1.0);\n      if (u_signal == 3) signalColor = vec4(1.0, 1.0, 0.0, 1.0);\n      if (u_signal == 4) signalColor = vec4(0.0, 0.8, 0.0, 1.0);\n      if (u_signal == 5) signalColor = vec4(1.0, 0.8, 0.2, 1.0);\n      if (u_signal == 6) signalColor = vec4(1.0, 0.2, 1.0, 1.0);\n      vec2 uv = v_texcoord;\n      uv.y = 1.0 - v_texcoord.y;\n      vec4 color = texture2D(u_texture, uv * u_spriteSize + u_spritePosition);\n      color = mix(color, signalColor, 1.0 - color.a);\n      color.a = 1.0;\n      uv = abs(uv - 0.5);\n      float borderColor = 1.0 - float(any(greaterThan(uv, border))) * 0.2;\n      color.rgb *= borderColor;\n      color.a *= u_alpha;\n      gl_FragColor = color;\n    }"
});
GameManager.codeManager.setLocationAction("Render.drawBackground", function (e, t) {
    const s = 16;
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0); // +
    this.gl.clear(this.gl.COLOR_BUFFER_BIT); // +
    //this.prepareTextures(this.backgroundTexture, 2); // -
    const i = Math.ceil(this.gl.canvas.width / (s * e)) + 1,
        n = Math.ceil(this.gl.canvas.height / (s * e)) + 1, o = ~~(t[0] / s) - (t[0] / s < 0 ? 1 : 0),
        a = ~~(t[1] / s) - (t[1] / s < 0 ? 1 : 0);
    for (let r = 0; r < i; r++) for (let i = 0; i < n; i++) {
        const n = (r + o) * s - t[0], l = (i + a) * s - t[1];
        this.drawTexture(n * e, l * e, 8 * e)
    }
    this.disableTextures()
});