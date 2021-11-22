
<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  name: 'InputContent',

  components: { EditorContent },

  props: {
    modelValue: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      editor: null,
    }
  },

  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;

      if(isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
      ],
      editorProps: {
        attributes: {
          class:
            "text-gray-600 text-sm font-light h-96 border-2 border-gray-100 py-4 px-3 z-0"
        }
      },
      content: this.modelValue,
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML())
      }
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },

  methods: {
    resetContent() {
      this.editor.setContent('<p>Write your story</p>')
    }
  }
}
</script>


