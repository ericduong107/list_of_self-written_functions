this.vhQueryAutoWeb.updateObject("68a7d95d1dd2f2be52a500ee", { 
    desktop_class: data, 
    mobile_landscape_class: data, 
    mobile_portrait_class: data, 
    tablet_landscape_class: data, 
    tablet_portrait_class: data, 
  })
    .then((bool) => {
      if (bool) {
        console.log('updateObject succeed');
      } else {
        console.error('updateObject fail');
      }
    })