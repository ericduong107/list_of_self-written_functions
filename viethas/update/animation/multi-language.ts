updateAnimation() {
  this.staticdata[this.device + '_animation']['animation-6'] = {
    ...this.staticdata[this.device + '_animation']['animation-6'],
    "--6-opacity": "var(--6f-opacity)",
    "--6-visibility": "var(--6f-visibility)",
    "--6-animation": "multi-language-animate-6 var(--6-animation-duration-shared) var(--6-animation-timing-function-shared) 1",
  }
  this.updateStaticData();
}