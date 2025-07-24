/**
 * Set hiệu ứng xuất hiện (visible)
 *
 * *Lưu ý: có thể gọi ở ngOnInit và sau khi đã set this.staticdata (1 số frame/block/object có thể sẽ gọi sau khi load dữ liệu xong), phải khai báo public element: ElementRef ở constructor
 *
 * @param _this đối tượng hiện tại
 * @param targetObject object class sẽ set các thuộc tính
 * @param animationConfig tên bộ animation (VD: 'animation-0') (bộ này cùng cấp với id) chứa thuộc tính ['--0-animation-delay'], ['--0-animation'],...
 * @param animationNumber (Mặc định = 0) Số bộ animation chứa biến delay sẽ sử dụng vd: ['--0-animation-delay'], ['--2-animation-delay'],...
 */
setAnimationVisible(_this, targetObject, animationConfig, animationNumber = 0) {
  if (!_this.data || !_this.staticdata) {
    return;
  }

  const animationType = _this.staticdata[_this.device + '_animation_type'];

  // Kiểm tra xem element đã render nếu render rồi thì thêm hiệu ứng animation khi xuất hiện
  if (animationType == 'visible') {
    // set mặc định sẽ ẩn để không bị chớp
    if (_this.observer) {
      targetObject['opacity'] = '0';
      targetObject['visibility'] = 'hidden';
    } else {
      targetObject['opacity'] = '1';
      targetObject['visibility'] = 'visible';
    }

    _this.observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        console.log('entry', entry);
        console.log('observerInstance', observerInstance);
        // Kiểm tra nếu entry trong vùng có thể nhìn thấy (trong viewport)
        const elementChild = entry.target.firstElementChild as HTMLElement;
        console.log('elementChild', elementChild);

        if (entry.isIntersecting) {
          // const objectElement = document.querySelectorAll<HTMLElement>(`[id="${_this.data._id}"]`);
          const element = entry.target.querySelector<HTMLElement>(`[id="${_this.data._id}"]`);
          console.log('element', element);
          // console.log('objectElement', objectElement);

          // dùng settimeout tương đương delay cho lần animation đầu tiên (đã set ẩn khi mới xuất hiện lần đầu ở ngOnInit)
          const animationData = _this.staticdata[_this.device + '_animation'][animationConfig];
          const delay = animationData[`--${animationNumber}-animation-delay`] || '0s';
          // if (objectElement.length > 0) {
            setTimeout(() => {
              // targetObject['opacity'] = '1';
              // targetObject['visibility'] = 'visible';
              elementChild.style.opacity = '1';
              elementChild.style.visibility = 'visible';

              // reset animation
              // objectElement.forEach(e => {
              //   e.style.animation = 'none';
              //   e.offsetHeight;
              //   e.style.animation = animationData[`--${animationNumber}-animation`];
              // })
              element.style.animation = 'none';
              element.offsetHeight;
              element.style.animation = animationData[`--${animationNumber}-animation`];

              // Sau khi animation xong, dừng observer cho phần tử này
              // observerInstance.unobserve(entry.target);
            }, parseFloat(delay) * 1000);
          // }
        }
        else {
          elementChild.style.opacity = '0';
          elementChild.style.visibility = 'hidden';
          // targetObject['opacity'] = '0';
          // targetObject['visibility'] = 'hidden';
        }
      });
    });

    // observing phần tử objectElement
    if (_this.element.nativeElement) _this.observer.observe(_this.element.nativeElement);
  }
}

// Rút gọn
/**
 * Set hiệu ứng xuất hiện (visible)
 *
 * *Lưu ý: có thể gọi ở ngOnInit và sau khi đã set this.staticdata (1 số frame/block/object có thể sẽ gọi sau khi load dữ liệu xong), phải khai báo public element: ElementRef ở constructor
 *
 * @param _this đối tượng hiện tại
 * @param targetObject object class sẽ set các thuộc tính
 * @param animationConfig tên bộ animation (VD: 'animation-0') (bộ này cùng cấp với id) chứa thuộc tính ['--0-animation-delay'], ['--0-animation'],...
 * @param animationNumber (Mặc định = 0) Số bộ animation chứa biến delay sẽ sử dụng vd: ['--0-animation-delay'], ['--2-animation-delay'],...
 */
setAnimationVisible(_this, targetObject, animationConfig, animationNumber = 0) {
  if (!_this.data || !_this.staticdata) {
    return;
  }

  const animationType = _this.staticdata[_this.device + '_animation_type'];

  // Kiểm tra xem element đã render nếu render rồi thì thêm hiệu ứng animation khi xuất hiện
  if (animationType == 'visible') {
    // set mặc định sẽ ẩn để không bị chớp
    if (_this.observer) {
      targetObject['opacity'] = '0';
      targetObject['visibility'] = 'hidden';
    } else {
      targetObject['opacity'] = '1';
      targetObject['visibility'] = 'visible';
    }

    _this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const elementChild = entry.target.firstElementChild as HTMLElement;

        // Kiểm tra nếu entry trong vùng có thể nhìn thấy (trong viewport)
        if (entry.isIntersecting) {
          const objectElement = document.querySelectorAll<HTMLElement>(`[id="${_this.data._id}"]`);

          // dùng settimeout tương đương delay cho lần animation đầu tiên (đã set ẩn khi mới xuất hiện lần đầu ở ngOnInit)
          const animationData = _this.staticdata[_this.device + '_animation'][animationConfig];
          const delay = animationData[`--${animationNumber}-animation-delay`] || '0s';
          if (objectElement.length > 0) {
            setTimeout(() => {
              elementChild.style.opacity = '1';
              elementChild.style.visibility = 'visible';

              // reset animation
              if (objectElement.length == 1) {
                objectElement.forEach(e => {
                  e.style.animation = 'none';
                  e.offsetHeight;
                  e.style.animation = animationData[`--${animationNumber}-animation`];
                })
              } else {
                console.log('objectElement', objectElement);
                const element = entry.target.querySelector<HTMLElement>(`[id="${_this.data._id}"]`);
                element.style.animation = 'none';
                element.offsetHeight;
                element.style.animation = animationData[`--${animationNumber}-animation`];
              }

            }, parseFloat(delay) * 1000);
          }
        }
        else {
          elementChild.style.opacity = '0';
          elementChild.style.visibility = 'hidden';
        }
      });
    });

    // observing phần tử objectElement
    if (_this.element.nativeElement) _this.observer.observe(_this.element.nativeElement);
  }
}
