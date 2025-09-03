/**
 * Set hiệu ứng xuất hiện (visible)
 *
 * *Lưu ý: có thể gọi ở ngOnInit và sau khi đã set this.staticdata (1 số frame/block/object có thể sẽ gọi sau khi load dữ liệu xong), phải khai báo public element: ElementRef ở constructor
 * - Cần thêm biến `observer: IntersectionObserver; // biến observer để theo dõi vị trí của element`
 * - Cần thêm biến `subscription: Subscription; // biến subscription để nghe biến animationConfigChanged`
 * - Cần thêm biến `isItemVisible: boolean; // biến kiểm tra hiệu ứng khung có phải là hiệu ứng của ô hay không (Chỉ dùng cho hiệu ứng xuất hiện)`
 * - Nên đặt ở ngOnInit
 *
 * @param _this đối tượng hiện tại
 * @param targetObject object class sẽ set các thuộc tính
 * @param animationConfig tên bộ animation (VD: 'animation-0') (bộ này cùng cấp với id) chứa thuộc tính ['--0-animation-delay'], ['--0-animation'],...
 * @param isRunOnce :boolean chỉ cho chạy một lần là khi load trang
 * @example
 * this.functionService.initAnimationVisible(this, () => { 
 *   this.functionService.setAnimationVisible(
 *     this, 
 *     this.class[this.isItemVisible ? 'frame-products__products--item' : 'frame-products'], 
 *     `animation-${this.isItemVisible ? 1 : 0}`, 
 *     {
 *       isRunOnce: this.config['animation-selected']?.run_once_animation_visible,
 *       animationNumber: this.isItemVisible ? 1 : 0
 *     }
 *   ); 
 * });
 */
setAnimationVisible(_this, targetObject, animationConfig, options: { animationNumber?: number; isRunOnce?: boolean } = {}) {
  if (!_this.data || !_this.staticdata) {
    return;
  }
  const {
    animationNumber = 0,
    isRunOnce = false
  } = options;

  const animationType = _this.staticdata[_this.device + '_animation_type'];
  // Kiểm tra xem element đã render nếu render rồi thì thêm hiệu ứng animation khi xuất hiện
  if (animationType == 'visible') {
    targetObject['opacity'] = '0';
    targetObject['visibility'] = 'hidden';

    const isComponentHasItem = ['AtwFrameProducts', 'AtwFrameRepeat', 'AtwFrameProductByCategory', 'AtwFrameProductByCategoryViewMore', 'AtwFrameProductRelate', 'AtwFrameProductsViewed', 'AtwFrameProductsFavorited', 'AtwFrameFoods', 'AtwFrameFoodsByCategory', 'AtwFrameFoodByCategoryViewMore', 'AtwFrameFoodsRelate', 'AtwFrameNews', 'AtwFrameNewsCategory', 'AtwFrameNewsByCategoryViewMore', 'AtwFrameNewsRelate', 'AtwFrameWebsite', 'AtwFrameWebsiteByCategory', 'AtwFrameWebsiteByCategoryViewMore', 'AtwFrameApp', 'AtwFrameAppByCategory', 'AtwFrameAppByCategoryViewMore', 'AtwFrameServices', 'AtwFrameServicesCategory', 'AtwFrameServiceByCategoryViewMore', 'AtwFrameServiceRelate', 'AtwFrameRecruiment', 'AtwFrameHotel', 'AtwFrameHotelByCategory', 'AtwFrameHotelByCategoryViewMore', 'AtwFrameHotelRelate', 'AtwFrameRoom', 'AtwFrameRoomByCategory', 'AtwFrameRoomByCategoryViewMore', 'AtwFrameRoomRelate'].includes(_this.data.component);

    _this.observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        // Kiểm tra nếu entry trong vùng có thể nhìn thấy (trong viewport)
        if (entry.isIntersecting) {
          if (isPlatformBrowser(this.platformId)) {
            const objectElements = document.querySelectorAll<HTMLElement>(`[id="${_this.data._id}"]`);

            // dùng settimeout tương đương delay cho lần animation đầu tiên (đã set ẩn khi mới xuất hiện lần đầu ở ngOnInit)
            const animationData = _this.staticdata[_this.device + '_animation']['animation-' + animationNumber];
            const delay = animationData[`--${animationNumber}-animation-delay`] || '0s';
            if (objectElements.length > 0) {
              // reset animation
              if (objectElements.length == 1) {
                if (isComponentHasItem && _this.isItemVisible) {
                  setTimeout(async () => {
                    const objectItemElements = document.querySelectorAll<HTMLElement>(`.animation-${animationNumber}[id^="cell_frame_${_this.data._id}_"]`);

                    for (let [index, eItem] of Array.from(objectItemElements).entries()) {
                      eItem.style.opacity = '0';
                      eItem.style.visibility = 'hidden';
                
                      // Chờ delayItem giây trước khi chạy
                      await new Promise((resolve) => setTimeout(resolve, parseFloat(animationData[`--${animationNumber}-animation-delay-shared`] || '0s') * 1000));

                      eItem.style.opacity = '1';
                      eItem.style.visibility = 'visible';

                      eItem.style.animation = 'none';
                      eItem.offsetHeight;
                      eItem.style.animation = animationData[`--${animationNumber}-animation`];
                      
                      // Sau khi animation xong, dừng observer cho phần tử này
                      if (isRunOnce) {
                        observerInstance.unobserve(entry.target);
                      }
                    }
                  });
                }
                else {
                  objectElements.forEach(async e => {
                    setTimeout(() => {
                      targetObject['opacity'] = '1';
                      targetObject['visibility'] = 'visible';
                      e.style.animation = 'none';
                      e.offsetHeight;
                      e.style.animation = animationData[`--${animationNumber}-animation`];

                      // Sau khi animation xong, dừng observer cho phần tử này
                      if (isRunOnce) {
                        observerInstance.unobserve(entry.target);
                      }
                    }, parseFloat(delay) * 1000);
                  });
                }
              } else {
                setTimeout(() => {
                  targetObject['opacity'] = '1';
                  targetObject['visibility'] = 'visible';
                  const element = entry.target.querySelector<HTMLElement>(`[id="${_this.data._id}"]`);
                  element.style.animation = 'none';
                  element.offsetHeight;
                  element.style.animation = animationData[`--${animationNumber}-animation`];

                  // Sau khi animation xong, dừng observer cho phần tử này
                  if (isRunOnce) {
                    observerInstance.unobserve(entry.target);
                  }
                }, parseFloat(delay) * 1000);
              }
            }
          }
        }
        else {
          targetObject['opacity'] = '0';
          targetObject['visibility'] = 'hidden';
        }
      });
    });

    // observing phần tử objectElement
    if (_this.element?.nativeElement) _this.observer.observe(_this.element.nativeElement);
  }
}