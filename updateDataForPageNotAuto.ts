updateDataNotAuto() {
    const devices = [
      'desktop',
      'mobile_landscape',
      'mobile_portrait',
      'tablet_landscape',
      'tablet_portrait',
    ];
    const updatedConfigs: any = {};
    for (const device of devices) {
      const keyName = `${device}_config`;
    
      // Clone config gốc
      const originalConfig = this.detailCurrentPage[keyName] || {};
      const newConfig = { ...originalConfig };
    
      for (const key in this.configUpdates) {
        if (!newConfig.hasOwnProperty(key)) {
          newConfig[key] = this.configUpdates[key];
          console.log(`Thêm '${key}' vào ${keyName}:`, newConfig[key]);
        }
      }
    
      updatedConfigs[keyName] = newConfig;
    }
    this.vhQueryAutoWeb
      .updatePage(this.detailCurrentPage._id, updatedConfigs)
      .then(
        (bool) => {
          // console.log('updatePage', bool);
          this.close();
        },
        (error) => {
          console.error(error);
        }
      );
    if (!this.staticdata) {
      this.staticdata = this.staticdataUpdates;
      this.vhQueryAutoWeb
        .updatePage(this.detailCurrentPage._id, {
          ['staticdata']: this.staticdataUpdates,
        })
        .then(
          (bool) => {
            // console.log('updatePage', bool);
            this.close();
          },
          (error) => {
            console.error(error);
          }
        );
      console.log(`this.staticdata`, this.staticdata, 'thêm thành công');
    }
    console.log("Có vẻ bạn đã update xong rồi đó")
  }
