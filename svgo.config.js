module.exports = {
  plugins: [
    {
      removeAttrs: {
        attrs: "class"
      }
    },
    {
      removeTitle: true
    },
    {
      sortAttrs: true
    },
    {
      removeStyleElement: true
    },
    {
      removeComments: true
    },
    {
      removeUselessDefs: true
    },
    {
      removeScriptElement: true
    },
    {
      addAttributesToSVGElement: {
        attribute: `class="c-icon {{ extra_classes }}" fill="{{ color }}"`
      }
    }
  ]
};
