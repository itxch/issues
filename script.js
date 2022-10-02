(function () {
  const range = document.createRange();
  range.selectNode(document.getElementsByTagName("div")[0]);

  const documentFragment = range.createContextualFragment(
    "<p>Hello there :)</p>"
  );
  document.body.appendChild(documentFragment);
})();
