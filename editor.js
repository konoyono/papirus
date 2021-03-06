const editor = {
  simplemde: {},
  renew: (content = "") => {
    const editorContainer = $("#editor-container")
    editorContainer.empty()
    editorContainer.append('<textarea id="editor"></textarea>')
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      toolbar: [],
      spellChecker: false,
      status: false,
      indentWithTabs: false,
      tabSize: 4,
    })
    const codemirror = $('textarea[id="editor"]').nextAll(".CodeMirror")[0]
      .CodeMirror
    codemirror.getDoc().setValue(content)
    codemirror.clearHistory()
  },
  value: () => {
    return simplemde.value()
  },
}
