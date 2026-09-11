_animationFromDatabase = function (_this) {
  // hàm này để tìm phần tử có class animation của chính component đó, 
  // nếu sử dụng querySelectorAll sẽ lấy tất cả phần tử con có class animation 
  // của tất cả component nên những phần tử con sẽ bị dính animation của phần tử cha
  function findElementsUntil(ele, selector) {
    let elements = [];
    function traverse(node) {
        if (node.id.includes('_root')) return;
        if (node.classList.contains(selector)) {
            elements.push(node);
        }
        for (let child of node.children) {
            traverse(child);
        }
    }
    traverse(ele);
    return elements;
  }

  // Cập nhật animation mới
  _this.animation = _this.staticdata[_this.device + '_animation'];
  const elementArray = document.querySelectorAll<HTMLElement>(`[id="${_this.data._id}_root"]`);
  if (elementArray.length > 0) {
    for (const p in _this.animation) {
      const animationProperties = _this.animation[p];
      elementArray.forEach((ele) => {

        // Lọc ra các phần tử con không phải là comment
        let childNode;
        ele.childNodes.forEach((child) => {
          if(child.nodeName !== "#comment") {
            childNode = child;
          }
        });
        
        const animationElements = findElementsUntil(childNode, p);
        animationElements.forEach((animEle) => {
          for (const q in animationProperties) {
            animEle.style.setProperty(q, animationProperties[q]);
          }
        });
      });
    }
  }

  if(_this.staticdata[_this.device + '_animation_sub']) {
    _this.animation_sub = _this.staticdata[_this.device + '_animation_sub']
    if (elementArray.length > 0) {
      for (const p in _this.animation_sub) {
        const animationProperties = _this.animation_sub[p];
        elementArray.forEach((ele) => {
          // Lọc ra các phần tử con không phải là comment
          let childNode;
          ele.childNodes.forEach((child) => {
            if(child.nodeName !== "#comment") {
              childNode = child;
            }
          });

          const animationElements = findElementsUntil(childNode, p);
          animationElements.forEach((animEle) => {
            for (const q in animationProperties) {
              animEle.style.setProperty(q, animationProperties[q]);
            }
          });
        });
      }
    }
  }
};
