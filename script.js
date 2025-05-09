//your code here
<script>
  document.getElementById('jaanetu').addEventListener('click', function(e) {
    if (!this.href || this.href === '#') {
      e.preventDefault();
      alert('Invalid link!');
    }
  });
</script>
