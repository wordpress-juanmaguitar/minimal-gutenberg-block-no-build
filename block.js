(function (blocks, element, blockEditor) {
  var el = element.createElement;
  var useBlockProps = blockEditor.useBlockProps;

  blocks.registerBlockType("minimal-gutenberg-block/my-block", {
    apiVersion: 2,
    title: 'minimal-block',
    icon: 'smiley', 
    category: 'media', 
    edit: function () {
      return el("p", useBlockProps() , "Hello World - Block Editor");
    },
    save: function () {
      return el("p", useBlockProps() , "Hello World - Frontend");
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor);
