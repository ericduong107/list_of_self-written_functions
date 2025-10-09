interface Animation {
  [key: string]: any;
}

interface Item {
  id: string;
  name: string;
  animation: {
      [key: string]: Animation;
  };
}
var resultArrayAnimations: any[] = [];
const resultArrayNames: string[] = [];

function processItems(items: Item[]): string[] {
  const resultArrayIds: string[] = [];

  items.forEach((item, index, array) => {
      let shouldAddId = false;

      for (const animationKey in item.animation) {
          const animation = item.animation[animationKey];

          for (const key in animation) {
              if (key.includes('--0hb') || key.includes('--0b') || key.includes('--0a') || key.includes('--0ha')) {
                  shouldAddId = true;

                  if ((key.includes('--0b') || key.includes('--0hb')) && !animation.hasOwnProperty('--0b-content')) {
                      animation['--0b-content'] = '';
                  }

                  if ((key.includes('--0a') || key.includes('--0ha')) && !animation.hasOwnProperty('--0a-content')) {
                      animation['--0a-content'] = '';
                  }
              }
          }
      }

      if (shouldAddId) {
          resultArrayIds.push(item.id);
          resultArrayNames.push(item.name);
          array[index] = item;
      }

      resultArrayAnimations = array;
  });

  return resultArrayIds;
}

// Example usage:
const items: Item[] = [
    {
      "id": "000001",
      "type": "1",
      "name": "thu_phong",
      "animation": {
        "animation-0": {
          "--0h-transform-origin-x-shared": "center",
          "--0h-transform-origin-y-shared": "center",
          "--0h-transform-origin": "var(--0h-transform-origin-x-shared) var(--0h-transform-origin-y-shared)",
          "--0h-transform": "scale(1.5)",
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s"
        }
      },
      "customize": [
        {
          "label": "Tâm trục ngang của hiệu ứng",
          "var": "--0h-transform-origin-x-shared",
          "type": "transform-origin-x"
        },
        {
          "label": "Tâm trục dọc của hiệu ứng",
          "var": "--0h-transform-origin-y-shared",
          "type": "transform-origin-y"
        },
        {
          "label": "",
          "var": "--0h-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000002",
      "type": "1",
      "name": "lam_mo",
      "animation": {
        "animation-0": {
          "--0h-opacity": "0.6",
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s"
        }
      },
      "customize": [
        {
          "label": "Độ trong suốt",
          "var": "--0h-opacity",
          "type": "opacity"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000003",
      "type": "1",
      "name": "doi_mau",
      "animation": {
        "animation-0": {
          "--0-transition": "0.3s",
          "--0h-transition": "0.3s",
          "--0h-background-color": "#00a859",
          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition)",
          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000004",
      "type": "1",
      "name": "tao_bong",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",
          "--0h-filter": "drop-shadow(0 0 0.5rem #00a859)"
        }
      },
      "customize": [
        {
          "label": "",
          "var": "--0h-filter",
          "type": "filter"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000005",
      "type": "1",
      "name": "thanh_truot_doi",
      "animation": {
        "animation-0": {
          "--0h-transition-shared": "0.3s",
          "--0-transition-shared": "0.3s",
          "--0-overflow": "hidden",
          "--0-position": "relative",
          "--0-width": "100%",
          "--0-height": "100%",
          "--0-border": "2px solid #E5E5E5",
          "--0-border-radius": "5px",
          "--0-z-index": "0",
          "--0h2-color": "#ffffff",
          "--0h4-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h4-z-index": "1",
          "--0b-background-color": "#00a859",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-z-index": "-1",
          "--0b-height": "50%",
          "--0b-width": "0",
          "--0b-position": "absolute",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0h2-transition": "var(--0h-transition-shared)",
          "--0h4-transition": "var(--0h-transition-shared)",
          "--0ha-transition": "var(--0h-transition-shared)",
          "--0hb-transition": "var(--0h-transition-shared)",
          "--0h-transition": "var(--0h-transition-shared)",
          "--0hb-width": "100%",
          "--0hb-height": "50%",
          "--0hb-top": "0",
          "--0hb-position": "absolute",
          "--0hb-left": "0",
          "--0a-background-color": "#00a859",
          "--0a-z-index": "-1",
          "--0a-height": "50%",
          "--0a-width": "0",
          "--0a-position": "absolute",
          "--0a-bottom": "0",
          "--0a-right": "0",
          "--0ha-width": "100%",
          "--0ha-height": "50%",
          "--0a-transition": "var(--0-transition-shared)",
          "--0b-transition": "var(--0-transition-shared)",
          "--0-transition": "var(--0-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nền trên",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Màu nền dưới",
          "var": "--0a-background-color",
          "type": "background-color"
        },
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ],
      "override": {
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000015",
      "type": "1",
      "name": "thanh_truot_don",
      "animation": {
        "animation-0": {
          "--0h-transition-shared": "0.3s",
          "--0-transition-shared": "0.3s",
          "--0-overflow": "hidden",
          "--0-position": "relative",
          "--0-width": "100%",
          "--0-height": "100%",
          "--0-border": "2px solid #E5E5E5",
          "--0-border-radius": "5px",
          "--0-z-index": "0",
          "--0h2-color": "#ffffff",
          "--0h4-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h4-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",
          "--0h4-transition": "var(--0h-transition-shared)",
          "--0hb-transition": "var(--0h-transition-shared)",
          "--0h-transition": "var(--0h-transition-shared)",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-background-color": "#00a859",
          "--0b-z-index": "-1",
          "--0b-height": "100%",
          "--0b-width": "0",
          "--0b-position": "absolute",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0hb-left": "0",
          "--0hb-width": "100%",
          "--0hb-position": "absolute",
          "--0hb-height": "100%",
          "--0b-transition": "var(--0-transition-shared)",
          "--0-transition": "var(--0-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ],
      "override": {
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000017",
      "type": "1",
      "name": "thanh_dung_chay",
      "animation": {
        "animation-0": {
          "--0h-transition-shared": "0.3s",
          "--0-transition-shared": "0.3s",
          "--0-overflow": "hidden",
          "--0-position": "relative",
          "--0-width": "100%",
          "--0h2-color": "#ffffff",
          "--0h4-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h4-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",
          "--0h4-transition": "var(--0h-transition-shared)",
          "--0-z-index": "0",
          "--0b-background-color": "#00a859",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-z-index": "-1",
          "--0b-height": "100%",
          "--0b-width": "100%",
          "--0hb-position": "absolute",
          "--0b-position": "absolute",
          "--0b-top": "0",
          "--0b-left": "-100%",
          "--0hb-left": "100%",
          "--0h-transition": "var(--0h-transition-shared)",
          "--0b-transition": "var(--0-transition-shared)",
          "--0hb-width": "100%",
          "--0hb-height": "100%",
          "--0-transition": "var(--0-transition-shared)",
          "--0hb-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ],
      "override": {
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000014",
      "type": "1",
      "name": "rung_lac",
      "animation": {
        "animation-0": {
          "--0h-animation-duration-shared": "0.2s",
          "--0h-animation-timing-function-shared": "ease",
          "--0h-animation-iteration-count-shared": "2",
          "--0h-animation": "button-animate-3 var(--0h-animation-duration-shared) var(--0h-animation-timing-function-shared) var(--0h-animation-iteration-count-shared)",
          "--0f-transform": "translateX(3px) rotate(10deg)",
          "--0-50-transform": "translateX(-3px) rotate(-10deg)",
          "--0t-transform": "translate(0, 0)",
          "--0h-transform-origin-x-shared": "center",
          "--0h-transform-origin-y-shared": "center",
          "--0h-transform-origin": "var(--0h-transform-origin-x-shared) var(--0h-transform-origin-y-shared)"
        }
      },
      "customize": [
        {
          "label": "Tâm trục ngang của hiệu ứng",
          "var": "--0h-transform-origin-x-shared",
          "type": "transform-origin-x"
        },
        {
          "label": "Tâm trục dọc của hiệu ứng",
          "var": "--0h-transform-origin-y-shared",
          "type": "transform-origin-y"
        },
        {
          "label": "Khi bắt đầu",
          "var": "--0f-transform",
          "type": "transform"
        },
        {
          "label": "Khi kết thúc",
          "var": "--0-50-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian lặp của mỗi hoạt ảnh",
          "var": "--0h-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Kiểu chạy hiệu ứng",
          "var": "--0h-animation-timing-function-shared",
          "type": "animation-timing-function"
        },
        {
          "label": "Lặp hoạt ảnh",
          "var": "--0h-animation-iteration-count-shared",
          "type": "animation-iteration-count"
        }
      ]
    },
    {
      "id": "000018",
      "type": "1",
      "name": "3D",
      "animation": {
        "animation-0": {
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s",
          "--0h-transform": "translateX(-4px) translateY(-4px)",
          "--0h-filter": "drop-shadow(4px 4px 0px #000000)",
          "--0h-background-color": "#00a859",
          "--0h2-color": "#ffffff",
          "--0h4-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h4-z-index": "1",
          "--0h2-transition": "var(--0h-transition)",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Bóng",
          "var": "--0h-filter",
          "type": "filter"
        },
        {
          "label": "Chỉnh sửa di chuyển cho khớp với bóng",
          "var": "--0h-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000020",
      "type": "1",
      "name": "vien_chay",
      "animation": {
        "animation-0": {
          "--shared-line": "1px solid #000000",
          "--shared-line-transition": "0.4s",
          "--shared-padding": "3px",
          "--0-position": "relative",
          "--0hb-position": "absolute",
          "--0b-position": "absolute",
          "--0b-top": "var(--shared-padding)",
          "--0b-left": "var(--shared-padding)",
          "--0hb-left": "var(--shared-padding)",
          "--0hb-right": "var(--shared-padding)",
          "--0b-bottom": "var(--shared-padding)",
          "--0hb-bottom": "var(--shared-padding)",
          "--0b-right": "var(--shared-padding)",
          "--0b-border-top": "var(--shared-line)",
          "--0b-border-bottom": "var(--shared-line)",
          "--0b-transform": "scale3d(0, 1, 1)",
          "--0hb-transform": "scale3d(1, 1, 1)",
          "--0b-transition": "all var(--shared-line-transition) linear",
          "--0hb-transition": "all var(--shared-line-transition) linear",
          "--0hb-top": "var(--shared-padding)",
          "--0a-position": "absolute",
          "--0a-top": "var(--shared-padding)",
          "--0ha-top": "var(--shared-padding)",
          "--0a-left": "var(--shared-padding)",
          "--0ha-left": "var(--shared-padding)",
          "--0a-bottom": "var(--shared-padding)",
          "--0ha-bottom": "var(--shared-padding)",
          "--0a-right": "var(--shared-padding)",
          "--0ha-right": "var(--shared-padding)",
          "--0a-border-left": "var(--shared-line)",
          "--0a-border-right": "var(--shared-line)",
          "--0a-transform": "scale3d(1, 0, 1)",
          "--0ha-transform": "scale3d(1, 1, 1)",
          "--0a-transition": "all var(--shared-line-transition) linear",
          "--0ha-transition": "all var(--shared-line-transition) linear"
        }
      },
      "customize": [
        {
          "label": "Chỉnh sửa viền",
          "var": "--shared-line",
          "type": "border"
        },
        {
          "label": "Lề cho viền",
          "var": "--shared-padding",
          "type": "padding"
        },
        {
          "label": "Thời gian hiệu ứng",
          "var": "--shared-line-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000021",
      "type": "1",
      "name": "lam_day_tu_tren_phai_xuong_duoi_trai",
      "animation": {
        "animation-0": {
          "--0h-transition-shared": "0.5s",
          "--0-transition-shared": "0.5s",
          "--0-shared-background-color": "#ff0000",
          "--0-position": "relative",
          "--0-transition": "var(--0-transition-shared)",
          "--0h-transition": "var(--0h-transition-shared)",
          "--0h2-transition": "var(--0h-transition-shared)",
          "--0h4-transition": "var(--0h-transition-shared)",
          "--0-background-image": "linear-gradient(30deg, transparent 50%, var(--0-shared-background-color) 50%)",
          "--0-background-size": "298%",
          "--0-background-color": "transparent",
          "--0-background-repeat": "no-repeat",
          "--0-background-position": "0%",
          "--0h-background-position": "100%",
          "--0h2-color": "#ffffff",
          "--0h4-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h4-z-index": "1"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0-shared-background-color",
          "type": "color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000022",
      "type": "1",
      "name": "lap_lanh",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0b-position": "absolute",
          "--0b-background-color": "white",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0b-height": "100%",
          "--0hb-height": "100%",
          "--0b-width": "0",
          "--0hb-position": "absolute",
          "--0hb-opacity": "0.5",
          "--0b-opacity": "0.5",
          "--0b-transition": "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-transition": "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-top": "0",
          "--0hb-left": "auto",
          "--0hb-right": "0",
          "--0hb-width": "100%",
          "--0b-z-index": "3"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "color"
        },
        {
          "label": "Độ trong suốt",
          "var": "--0hb-opacity",
          "type": "opacity"
        }
      ]
    },
    {
      "id": "000023",
      "type": "1",
      "name": "thanh_dung_lap_lanh",
      "animation": {
        "animation-0": {
          "--0-overflow": "hidden",
          "--0-position": "relative",
          "--0a-background-color": "#fff",
          "--0a-height": "155px",
          "--0a-left": "-77px",
          "--0a-opacity": "0.2",
          "--0a-position": "absolute",
          "--0a-top": "-50px",
          "--0a-transform": "rotate(35deg)",
          "--0a-transition": "all 550ms cubic-bezier(0.19, 1, 0.22, 1)",
          "--0ha-transition": "all 550ms cubic-bezier(0.19, 1, 0.22, 1)",
          "--0a-width": "50px",
          "--0a-z-index": "3",
          "--0ha-width": "50px",
          "--0ha-height": "155px",
          "--0ha-left": "120%"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0a-background-color",
          "type": "color"
        },
        {
          "label": "Độ trong suốt",
          "var": "--0a-opacity",
          "type": "opacity"
        }
      ]
    },
    {
      "id": "000024",
      "type": "1",
      "name": "tao_bong_nhieu_mau",
      "animation": {
        "animation-0": {
          "--0hf-filter": "drop-shadow(0 0 0.5rem #ff0000)",
          "--0h-50-filter": "drop-shadow(0 0 0.5rem #0000ff)",
          "--0ht-filter": "drop-shadow(0 0 0.5rem #00ff00)",
          "--0h-animation-duration-shared": "1s",
          "--0h-animation-timing-function-shared": "linear",
          "--0h-animation-iteration-count-shared": "infinite",
          "--0h-animation": "button-animate-0h var(--0h-animation-duration-shared) var(--0h-animation-timing-function-shared) var(--0h-animation-iteration-count-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu 1",
          "var": "--0hf-filter",
          "type": "filter"
        },
        {
          "label": "Màu 2",
          "var": "--0h-50-filter",
          "type": "filter"
        },
        {
          "label": "Màu 3",
          "var": "--0ht-filter",
          "type": "filter"
        },
        {
          "label": "Thời gian lặp của mỗi hoạt ảnh",
          "var": "--0h-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Kiểu chạy hiệu ứng",
          "var": "--0h-animation-timing-function-shared",
          "type": "animation-timing-function"
        },
        {
          "label": "Lặp hoạt ảnh",
          "var": "--0h-animation-iteration-count-shared",
          "type": "animation-iteration-count"
        }
      ]
    },
    {
      "id": "000033",
      "type": "1",
      "name": "doi_mau_va_quay_bieu_tuong",
      "animation": {
        "animation-0": {
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s",
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0h-background-color": "#00a859",
          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h2-transition": "var(--0h-transition)",
          "--0h4-transition": "var(--0h-transition)",
          "--0h4-animation-duration-shared": "0.5s",
          "--0h4-animation-timing-function-shared": "linear",
          "--0h4-animation-iteration-count-shared": "infinite",
          "--0h4-animation": "button-animate-0h4 var(--0h4-animation-duration-shared) var(--0h4-animation-timing-function-shared) var(--0h4-animation-iteration-count-shared)",
          "--0h4f-transform": "rotate(0deg)",
          "--0h4-50-transform": "rotate(180deg)",
          "--0h4t-transform": "rotate(360deg)",
          "--0h4-transform-origin-x-shared": "center",
          "--0h4-transform-origin-y-shared": "center",
          "--0h4-transform-origin": "var(--0h4-transform-origin-x-shared) var(--0h4-transform-origin-y-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Tâm trục ngang của hiệu ứng",
          "var": "--0h4-transform-origin-x-shared",
          "type": "transform-origin-x"
        },
        {
          "label": "Tâm trục dọc của hiệu ứng",
          "var": "--0h4-transform-origin-y-shared",
          "type": "transform-origin-y"
        },
        {
          "label": "Thời gian lặp của mỗi hoạt ảnh",
          "var": "--0h4-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Kiểu chạy hiệu ứng",
          "var": "--0h4-animation-timing-function-shared",
          "type": "animation-timing-function"
        },
        {
          "label": "Lặp hoạt ảnh",
          "var": "--0h4-animation-iteration-count-shared",
          "type": "animation-iteration-count"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000034",
      "type": "1",
      "name": "doi_mau_nen_xuat_hien_tu_tam",
      "animation": {
        "animation-0": {
          "--0-transition": "0.6s",
          "--0-overflow": "hidden",
          "--0h-transition": "0.6s",
          "--0h-transform": "scale(1.1)",
          "--0h-box-shadow": "0 0px 20px rgba(193, 163, 98,0.4)",

          "--0b-content": "",
          "--0hb-position": "absolute",
          "--0b-position": "absolute",
          "--0b-margin": "auto",
          "--0b-border-radius": "50px 50px 50px 50px",
          "--0b-width": "100%",
          "--0b-height": "100%",
          "--0b-transform": "scale(0)",
          "--0b-z-index": "-1",
          "--0b-background-color": "rgba(193, 163, 98,0.4)",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-transition": "var(--0-transition)",
          
          "--0hb-width": "100%",
          "--0hb-height": "100%",
          "--0hb-transform": "scale(3)",
          "--0hb-transition": "var(--0h-transition)",
          "--0hb-z-index": "1",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "2",
          "--0h2-transition": "var(--0h-transition)",
          "--0h4-color": "#ffffff",
          "--0h4-z-index": "2",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Bo góc",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Thu phóng",
          "var": "--0h-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000035",
      "type": "1",
      "name": "phan_chieu_mat_guong",
      "animation": {
        "animation-0": {
          "--0h-box-reflect-direction-keyword-shared": "below",
          "--0h-box-reflect-offset-shared": "10px",
          "--0h-box-reflect-mask-linear-direction-keyword-shared": "bottom",
          "--0h-box-reflect-mask-linear-opacity-start-shared": "0",
          "--0h-box-reflect-mask-linear-opacity-end-shared": "0.4",
          "--0h-webkit-box-reflect": "var(--0h-box-reflect-direction-keyword-shared) var(--0h-box-reflect-offset-shared) linear-gradient(to var(--0h-box-reflect-mask-linear-direction-keyword-shared), rgba(0,0,0, var(--0h-box-reflect-mask-linear-opacity-start-shared)), rgba(0,0,0,var(--0h-box-reflect-mask-linear-opacity-end-shared)))",

          "--0h-transform-origin-x-shared": "center",
          "--0h-transform-origin-y-shared": "center",
          "--0h-transform-origin":"var(--0h-transform-origin-x-shared) var(--0h-transform-origin-y-shared)",
          "--0h-transform": "scale(0.9)",
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s",

          "--0h-box-shadow": "0px 0px 60px #1f4c65",
          "--0h-background-color": "rgb(2,29,78)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "2",
          "--0h2-transition": "var(--0h-transition)",
          "--0h4-color": "#ffffff",
          "--0h4-z-index": "2",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "",
          "var": "--0h-box-reflect-direction-keyword-shared",
          "type": "box-reflect-direction-keyword"
        },
        {
          "label": "",
          "var": "--0h-box-reflect-offset-shared",
          "type": "box-reflect-offset"
        },
        {
          "label": "",
          "var": "--0h-box-reflect-mask-linear-direction-keyword-shared",
          "type": "box-reflect-mask-linear-direction-keyword"
        },
        {
          "label": "Độ mờ của phần phản chiếu điểm bắt đầu",
          "var": "--0h-box-reflect-mask-linear-opacity-start-shared",
          "type": "opacity"
        },
        {
          "label": "Độ mờ của phần phản chiếu điểm kết thúc",
          "var": "--0h-box-reflect-mask-linear-opacity-end-shared",
          "type": "opacity"
        },
        {
          "label": "Thu phóng",
          "var": "--0h-transform",
          "type": "transform"
        },
        {
          "label": "Tâm trục ngang của hiệu ứng thu phóng",
          "var": "--0h-transform-origin-x-shared",
          "type": "transform-origin-x"
        },
        {
          "label": "Tâm trục dọc của hiệu ứng thu phóng",
          "var": "--0h-transform-origin-y-shared",
          "type": "transform-origin-y"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color animation-0-hover-box-shadow"
      }
    },
    {
      "id": "000036",
      "type": "1",
      "name": "nen_co_hinh_dang",
      "animation": {
        "animation-0": {
          "--0-transition-shared": "0.2s",
          "--0h-transition-shared": "0.2s",
          "--0-position": "relative",
          "--0-overflow": "hidden",

          "--0b-position": "absolute",
          "--0hb-position": "absolute",
          "--0b-transform": "rotate(180deg)",
          "--0b-width": "100%",
          "--0b-height": "10%",
          "--0b-transition": "var(--0-transition-shared)",
          "--0b-top": "0",
          "--0b-z-index": "-1",
          "--0b-border-radius": "50px 50px 50px 50px",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-background-color": "#8792eb",
          "--0b-clip-path": "polygon( 0% 74%, 4% 75%, 8% 76%, 11% 77%, 15% 78%, 20% 78%, 25% 77%, 32% 77%, 37% 75%, 40% 74%, 43% 74%, 46% 73%, 52% 72%, 57% 72%, 65% 74%, 66% 75%, 71% 78%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100% )",

          "--0a-position": "absolute",
          "--0a-width": "100%",
          "--0a-height": "var(--0b-height)",
          "--0a-transition": "var(--0-transition-shared)",
          "--0a-z-index": "var(--0b-z-index)",
          "--0a-border-radius": "50px 50px 50px 50px",
          "--0a-background-color": "var(--0b-background-color)",
          "--0a-bottom": "0",
          "--0a-clip-path": "var(--0b-clip-path)",

          "--0hb-width": "100%",
          "--0hb-height": "80%",
          "--0hb-transform": "var(--0b-transform)",
          "--0hb-transition": "var(--0h-transition-shared)",
          "--0hb-top": "0",
          "--0hb-z-index": "1",
          "--0hb-clip-path": "polygon( 0 30%, 9% 34%, 7% 39%, 11% 43%, 13% 33%, 17% 30%, 24% 34%, 25% 35%, 30% 31%, 30% 38%, 39% 33%, 35% 43%, 43% 45%, 55% 46%, 65% 74%, 67% 66%, 81% 57%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100% )",

          "--0ha-width": "100%",
          "--0ha-height": "var(--0hb-height)",
          "--0ha-transition": "var(--0h-transition-shared)",
          "--0ha-z-index": "var(--0hb-z-index)",
          "--0ha-clip-path": "var(--0hb-clip-path)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "2",
          "--0h2-transition": "var(--0h-transition-shared)",
          "--0h4-color": "#ffffff",
          "--0h4-z-index": "2",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Bo góc mảnh trên",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Bo góc mảnh dưới",
          "var": "--0a-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000039",
      "type": "1",
      "name": "lam_day_xoay_cheo",
      "animation": {
        "animation-0": {
          "--0-transition": "0.5s",
          "--0h-transition": "0.5s",
          "--0-position": "relative",
          "--0-overflow": "hidden",

          "--0b-content": "",
          "--0b-position": "absolute",
          "--0b-transform": "skew(90deg) rotate(180deg) translate(-50%, -50%)",
          "--0b-width": "100%",
          "--0b-height": "100%",
          "--0b-transition": "var(--0-transition)",
          "--0b-top": "-50%",
          "--0b-left": "-25%",
          "--0b-z-index": "-1",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-background-color": "#00A97F",
          "--0b-inset": "50%",
          
          "--0a-content": "",
          "--0a-position": "absolute",
          "--0a-transform": "skew(90deg) translate(-50%, -50%)",
          "--0a-width": "100%",
          "--0a-height": "100%",
          "--0a-transition": "var(--0-transition)",
          "--0a-left": "25%",
          "--0a-inset": "50%",
          "--0a-z-index": "-1",
          "--0a-background-color": "#00A97F",

          "--0hb-width": "100%",
          "--0hb-height": "100%",
          "--0hb-transform": "skew(45deg) rotate(180deg) translate(-45%, 0)",
          "--0hb-transition": "var(--0h-transition)",
          "--0hb-position": "absolute",

          "--0ha-width": "100%",
          "--0ha-height": "var(--0hb-height)",
          "--0ha-transition": "var(--0h-transition)",
          "--0ha-transform": "skew(45deg) rotate(0) translate(-50%, 0)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "2",
          "--0h2-transition": "var(--0h-transition)",
          "--0h4-color": "#ffffff",
          "--0h4-z-index": "2",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền của mảnh trên",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Màu nền của mảnh dưới",
          "var": "--0a-background-color",
          "type": "background-color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000040",
      "type": "1",
      "name": "nut_nhan_kieu_3d_nhan_vao_sau",
      "animation": {
        "animation-0": {
          "--0-transform": "perspective(200px) rotateX(15deg)",
          "--0h-transform": "perspective(180px) rotateX(30deg) translateY(2px)",
          "--0-transition": "0.3s",
          "--0h-transition": "0.3s"
        }
      },
      "customize": [
        {
          "label": "Vị trí bắt đầu xoay 3D",
          "var": "--0-transform",
          "type": "transform"
        },
        {
          "label": "Vị trí kết thúc xoay 3D",
          "var": "--0h-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian bắt đầu(s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc(s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000041",
      "type": "1",
      "name": "3D_nhan_xuong",
      "animation": {
        "animation-0": {
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s",
          "--0-transform": "translateX(-4px) translateY(-4px)",
          "--0-filter": "drop-shadow(4px 4px 0px #000000)",
          "--0h-transform": "translateX(0) translateY(0)",
          "--0h-filter": "drop-shadow(0 0 0 #000000)",
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0h-background-color": "#00a859",
          "--0h2-color": "#ffffff",
          "--0h4-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h4-z-index": "1",
          "--0h2-transition": "var(--0h-transition)",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Bóng",
          "var": "--0-filter",
          "type": "filter"
        },
        {
          "label": "Chỉnh sửa di chuyển cho khớp với bóng",
          "var": "--0-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color"
      }
    },
    {
      "id": "000042",
      "type": "1",
      "name": "tao_bong_hinh_elip",
      "animation": {
        "animation-0": {
          "--0-transition": "0.3s",
          "--0-position": "relative",

          "--0h-transform": "translateY(-0.25rem)",
          "--0h-transition": "0.3s",

          "--0b-content": "",
          "--0b-transition": "var(--0-transition)",
          "--0b-width": "100%",
          "--0b-height": "1em",
          "--0b-position": "absolute",
          "--0b-top": "100%",
          "--0b-z-index": "-1",
          "--0b-left": "0",
          "--0b-opacity": "0",

          "--0hb-background-image": "radial-gradient( ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80% )",
          "--0hb-shadow-distance-shared": "1.35rem",
          "--0hb-top": "calc(100% + var(--0hb-shadow-distance-shared))",
          "--0hb-opacity": "1",
          "--0hb-width": "100%",
          "--0hb-height": "1rem",
          "--0hb-position": "absolute",
          "--0hb-transition": "var(--0h-transition)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Chiều dài của bóng",
          "var": "--0hb-width",
          "type": "width",
          "max": 100,
          "unit": "%"
        },
        {
          "label": "Chiều rộng của bóng",
          "var": "--0hb-height",
          "type": "height",
          "max": 20,
          "unit": "rem"
        },
        {
          "label": "Khoảng cách của bóng",
          "var": "--0hb-shadow-distance-shared",
          "type": "number-unit-customize",
          "unit": "rem",
          "step": 0.01,
          "min": 0,
          "max": 10
        },
        {
          "label": "Nút nổi lên",
          "var": "--0h-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000043",
      "type": "1",
      "name": "tao_bong_o_ben_trong",
      "animation": {
        "animation-0": {
          "--0-transition": "0.3s",
          "--0-position": "relative",

          "--0h-transition": "0.3s",
          "--0h-box-shadow-shared": "0 0 0.55rem #dd648a",
          "--0h-box-shadow": "inset var(--0h-box-shadow-shared)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Tạo bóng",
          "var": "--0h-box-shadow-shared",
          "type": "box-shadow"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-box-shadow"
      }
    },
    {
      "id": "000044",
      "type": "1",
      "name": "bong_di_chuyen",
      "animation": {
        "animation-0": {
          "--0-transition": "0.3s",
          "--0-box-shadow": "4.8px 4.8px 0 #dd6395",

          "--0h-transition": "0.3s",
          "--0h-box-shadow": "-4.8px -4.8px 0 #979695",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Bóng khi bắt đầu",
          "var": "--0-box-shadow",
          "type": "box-shadow"
        },
        {
          "label": "Bóng khi kết thúc",
          "var": "--0h-box-shadow",
          "type": "box-shadow"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-box-shadow animation-0-hover-box-shadow"
      }
    },
    {
      "id": "000045",
      "type": "1",
      "name": "chu_nhan_ban",
      "animation": {
        "animation-0": {
          "--0-transition": "0.3s",
          "--0-position": "relative",
          "--0-overflow": "hidden",

          "--0h-transition": "0.3s",

          "--0a-content": "'YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES'",
          "--0a-transition": "var(--0-transition)",
          "--0a-width": "100%",
          "--0a-height": "100%",
          "--0a-position": "absolute",
          "--0a-top": "0",
          "--0a-left": "0",
          "--0a-z-index": "-1",
          "--0a-opacity": "0",
          "--0a-border-radius": "10px 10px 10px 10px",
          "--0a-background-color": "red",
          "--0a-text-align": "center",
          "--0a-display": "flex",
          "--0a-justify-content": "center",
          "--0a-align-items": "center",
          "--0a-font-size": "18px",
          "--0a-font-weight": "bold",
          "--0a-font-style": "normal",
          "--0a-color": "black",
          "--0a-padding": "16px",
          "--0a-overflow": "hidden",

          "--0ha-position": "absolute",
          "--0ha-text-shadow": "1px 1px 0 #FFFFFF",
          "--0ha-opacity": "1",
          "--0ha-z-index": "99",
          "--0ha-top": "0",
          "--0ha-left": "0",
          "--0ha-width": "100%",
          "--0ha-height": "100%",
          "--0ha-transition": "var(--0h-transition)"
        }
      },
      "customize": [
        {
          "label": "Nội dung",
          "var": "--0a-content",
          "type": "content"
        },
        {
          "label": "Bóng chữ",
          "var": "--0ha-text-shadow",
          "type": "text-shadow"
        },
        {
          "label": "Màu chữ",
          "var": "--0a-color",
          "type": "color"
        },
        {
          "label": "Kích thước chữ",
          "var": "--0a-font-size",
          "type": "font-size"
        },
        {
          "label": "In đậm không?",
          "var": "--0a-font-weight",
          "type": "font-weight-keyword"
        },
        {
          "label": "In nghiêng không?",
          "var": "--0a-font-style",
          "type": "font-style"
        },
        {
          "label": "Căn văn bản",
          "var": "--0a-text-align",
          "type": "text-align"
        },
        {
          "label": "Vị trí theo chiều ngang của văn bản trong lớp phủ",
          "var": "--0a-justify-content",
          "type": "justify-content"
        },
        {
          "label": "Vị trí theo chiều dọc của văn bản trong lớp phủ",
          "var": "--0a-align-items",
          "type": "align-items"
        },
        {
          "label": "Căn lề",
          "var": "--0ha-padding",
          "type": "padding"
        },
        {
          "label": "Màu nền",
          "var": "--0a-background-color",
          "type": "background-color"
        },
        {
          "label": "Bo góc nền khi di chuột",
          "var": "--0a-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000046",
      "type": "1",
      "name": "bong_hop_2_ben_lam_day",
      "animation": {
        "animation-0": {
          "--0-transition-shared": "0.3s",
          "--0-position": "relative",

          "--0h-transition-shared": "0.3s",

          "--0b-transition": "var(--0-transition-shared)",
          "--0b-width": "100%",
          "--0b-height": "100%",
          "--0b-position": "absolute",
          "--0b-top": "0",
          "--0-z-index": "0",
          "--0b-z-index": "-1",
          "--0b-left": "0",
          "--0b-border-radius": "10px 10px 10px 10px",
          "--0b-box-shadow-left-shared": "0 0 0 transparent",
          "--0b-box-shadow-right-shared": "0 0 0 transparent",
          "--0b-box-shadow": "inset var(--0b-box-shadow-left-shared), inset var(--0b-box-shadow-right-shared)",

          "--0hb-box-shadow-left-shared": "80px 0 0 #dd7e2a",
          "--0hb-box-shadow-right-shared": "-80px 0 0 #dd7e2a",
          "--0hb-box-shadow": "inset var(--0hb-box-shadow-left-shared), inset var(--0hb-box-shadow-right-shared)",
          "--0hb-top": "0",
          "--0hb-width": "100%",
          "--0hb-height": "100%",
          "--0hb-position": "absolute",
          "--0hb-transition": "var(--0h-transition-shared)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Bóng bên trái",
          "var": "--0hb-box-shadow-left-shared",
          "type": "box-shadow"
        },
        {
          "label": "Bóng bên phải",
          "var": "--0hb-box-shadow-right-shared",
          "type": "box-shadow"
        },
        {
          "label": "Bo bóng",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000047",
      "type": "1",
      "name": "bong_hop_tren_duoi_lam_day",
      "animation": {
        "animation-0": {
          "--0-transition-shared": "0.3s",
          "--0-position": "relative",

          "--0h-transition-shared": "0.3s",

          "--0b-transition": "var(--0-transition-shared)",
          "--0b-width": "100%",
          "--0b-height": "100%",
          "--0b-position": "absolute",
          "--0b-top": "0",
          "--0b-z-index": "-1",
          "--0-z-index": "0",
          "--0b-left": "0",
          "--0b-border-radius": "10px 10px 10px 10px",
          "--0b-box-shadow-top-shared": "0 0 0 transparent",
          "--0b-box-shadow-bottom-shared": "0 0 0 transparent",
          "--0b-box-shadow": "inset var(--0b-box-shadow-top-shared), inset var(--0b-box-shadow-bottom-shared)",

          "--0hb-box-shadow-top-shared": "0 30px 0 #dd7e2a",
          "--0hb-box-shadow-bottom-shared": "0 -30px 0 #dd7e2a",
          "--0hb-box-shadow": "inset var(--0hb-box-shadow-top-shared), inset var(--0hb-box-shadow-bottom-shared)",
          "--0hb-position": "absolute",
          "--0hb-top": "0",
          "--0hb-width": "100%",
          "--0hb-height": "100%",
          "--0hb-transition": "var(--0h-transition-shared)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Bóng bên trên",
          "var": "--0hb-box-shadow-top-shared",
          "type": "box-shadow"
        },
        {
          "label": "Bóng bên dưới",
          "var": "--0hb-box-shadow-bottom-shared",
          "type": "box-shadow"
        },
        {
          "label": "Bo bóng",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000048",
      "type": "1",
      "name": "bong_hop_4_phia_lam_day",
      "animation": {
        "animation-0": {
          "--0-transition-shared": "0.3s",
          "--0-position": "relative",

          "--0h-transition-shared": "0.3s",

          "--0b-transition": "var(--0-transition-shared)",
          "--0b-width": "100%",
          "--0b-height": "100%",
          "--0b-position": "absolute",
          "--0b-top": "0",
          "--0-z-index": "0",
          "--0b-z-index": "-1",
          "--0b-left": "0",
          "--0b-border-radius": "10px 10px 10px 10px",

          "--0hb-box-shadow-color-shared": "#dd648a",
          "--0hb-box-shadow-thickness-shared": "2rem",
          "--0hb-box-shadow": "inset 0 0 0 var(--0hb-box-shadow-thickness-shared) var(--0hb-box-shadow-color-shared)",
          "--0hb-position": "absolute",
          "--0hb-top": "0",
          "--0hb-width": "100%",
          "--0hb-height": "100%",
          "--0hb-transition": "var(--0h-transition-shared)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu bóng",
          "var": "--0hb-box-shadow-color-shared",
          "type": "color"
        },
        {
          "label": "Độ dày bóng để lấp đầy",
          "var": "--0hb-box-shadow-thickness-shared",
          "type": "number-unit-customize",
          "unit": "rem",
          "step": 0.01,
          "min": 0,
          "max": 100
        },
        {
          "label": "Bo bóng",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000050",
      "type": "1",
      "name": "xuat_hien_duong_cheo_o_giua_va_lam_day",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0-transition-shared": "1s",
          "--0h-transition-shared": "1s",
          
          "--0b-transition": "var(--0-transition-shared)",
          "--0b-width": "0",
          "--0b-height": "calc(300% + var(--0hb-width))",
          "--0b-position": "absolute",
          "--0b-top": "50%",
          "--0b-z-index": "-1",
          "--0b-left": "50%",
          "--0b-transform-edit-shared": "rotate(45deg)",
          "--0b-transform": "translate(-50%, -50%) var(--0b-transform-edit-shared)",
          "--0b-background-color": "#00a859",
          
          "--0hb-position": "absolute",
          "--0hb-top": "var(--0b-top)",
          "--0hb-left": "var(--0b-left)",
          "--0hb-width": "105%",
          "--0hb-height": "calc(300% + var(--0hb-width))",
          "--0hb-transform": "translate(-50%, -50%) var(--0b-transform-edit-shared)",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0hb-transition": "var(--0h-transition-shared)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Xoay",
          "var": "--0b-transform-edit-shared",
          "type": "transform"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000051",
      "type": "1",
      "name": "vet_sang",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0-transition-shared": "1.5s",

          "--0h-transition-shared": "1.5s",

          "--0b-background-image-linear-gradient-direction-shared": "60deg",
          "--0b-background-image-light-streak-shared": "rgba(255, 255, 255, 1)",
          "--0b-top": "calc(var(--0b-width) / 2)",
          "--0b-display": "block",
          "--0b-content": "''",
          "--0b-width": "200%",
          "--0b-z-index": "0",
          "--0b-height": "var(--0b-width)",
          "--0b-position": "absolute",
          "--0b-transform": "translateX(100%) translateY(-50%)",
          "--0b-transition": "var(--0-transition-shared)",

          "--0hb-z-index": "3",
          "--0hb-position": "absolute",
          "--0hb-top": "var(--0b-top)",
          "--0hb-width": "var(--0b-width)",
          "--0hb-height": "var(--0b-width)",
          "--0hb-transform": "translateX(-100%) translateY(-50%)",
          "--0hb-background-image": "linear-gradient(var(--0b-background-image-linear-gradient-direction-shared), transparent 0%, transparent 50%, var(--0b-background-image-light-streak-shared) 50%, transparent 80%, transparent 100%)",
          "--0hb-transition": "var(--0h-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Điều chỉnh hướng của vệt sáng",
          "var": "--0b-background-image-linear-gradient-direction-shared",
          "type": "background-image-gradient-direction"
        },
        {
          "label": "Màu của vệt sáng",
          "var": "--0b-background-image-light-streak-shared",
          "type": "background-color"
        },
        {
          "label": "Chỉnh sửa di chuyển khi bắt đầu",
          "var": "--0hb-transform",
          "type": "transform",
          "minTranslate": -100,
          "maxTranslate": 100
        },
        {
          "label": "Chỉnh sửa di chuyển khi kết thúc",
          "var": "--0b-transform",
          "type": "transform",
          "minTranslate": -100,
          "maxTranslate": 100
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition-duration"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition-duration"
        }
      ]
    },
    {
      "id": "000052",
      "type": "1",
      "name": "the_xoay_lam_day",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0-transition-shared": "0.5s",

          "--0h-transition-shared": "0.5s",

          "--0b-content": "''",
          "--0b-width": "20%",
          "--0b-height": "100%",
          "--0b-top": "50%",
          "--0b-left": "0",
          "--0b-background-color": "#00a859",
          "--0b-z-index": "0",
          "--0b-position": "absolute",
          "--0b-transform": "rotate(-45deg) translateX(-250%) translateY(-50%)",
          "--0b-transition": "all var(--0-transition-shared)",

          "--0hb-z-index": "0",
          "--0hb-position": "absolute",
          "--0hb-top": "0",
          "--0hb-left": "0",
          "--0hb-width": "100%",
          "--0hb-height": "100%",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0hb-transform": "none",
          "--0hb-transition": "all var(--0h-transition-shared)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Ẩn hiện để chỉnh sửa thẻ phủ",
          "var": "--0-overflow",
          "type": "overflow"
        },
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền thẻ phủ",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Kích thước ban đầu của thẻ phủ",
          "var": "--0b-width",
          "type": "width",
          "max": 100,
          "unit": "%"
        },
        {
          "label": "Vị trí ở trên của thẻ phủ",
          "var": "--0b-top",
          "type": "top-number"
        },
        {
          "label": "Vị trí ở trái của thẻ phủ",
          "var": "--0b-left",
          "type": "left-number"
        },
        {
          "label": "Chỉnh sửa",
          "var": "--0b-transform",
          "type": "transform",
          "minTranslate": -300,
          "maxTranslate": 300
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition-duration"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition-duration"
        }
      ]
    },
    {
      "id": "000049",
      "type": "1",
      "name": "xuat_hien_duong_vien_lam_day",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0-transition-shared": "1.5s",

          "--0h-transition-shared": "1.5s",

          "--0b-content": "''",
          "--0b-width": "100%",
          "--0b-height": "100%",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0b-background-color": "#00a859",
          "--0b-z-index": "0",
          "--0b-position": "absolute",
          "--0b-transform": "scaleX(0) scaleY(0.05)",
          "--0b-transform-origin-x-shared": "left",
          "--0b-transform-origin-y-shared": "top",
          "--0b-transform-origin": "var(--0b-transform-origin-x-shared) var(--0b-transform-origin-y-shared)",
          "--0b-transition": "all var(--0-transition-shared)",

          "--0hb-z-index": "0",
          "--0hb-position": "absolute",
          "--0hb-top": "0",
          "--0hb-left": "0",
          "--0hb-width": "100%",
          "--0hb-height": "100%",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0hb-transition": "all var(--0h-transition-shared)",
          "--0hb-transform-origin": "var(--0b-transform-origin)",

          "--0hb-animation-duration-shared": "1.5s",
          "--0hb-animation-fill-mode-shared": "forwards",
          "--0hb-animation": "button-animate-0hb-1 var(--0hb-animation-duration-shared) var(--0hb-animation-fill-mode-shared)",
          "--0hbf-transform": "var(--0b-transform)",
          "--0hb-20-transform": "scaleX(1) scaleY(0.05)",
          "--0hbt-transform": "scale(1, 1)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Ẩn hiện để chỉnh sửa thẻ phủ",
          "var": "--0-overflow",
          "type": "overflow"
        },
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền đường viền phủ",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Tâm trục ngang của hiệu ứng",
          "var": "--0b-transform-origin-x-shared",
          "type": "transform-origin-x"
        },
        {
          "label": "Tâm trục dọc của hiệu ứng",
          "var": "--0b-transform-origin-y-shared",
          "type": "transform-origin-y"
        },
        {
          "label": "Chỉnh sửa hiệu ứng ở giai đoạn đường viền",
          "var": "--0b-transform",
          "type": "transform"
        },
        {
          "label": "Chỉnh sửa hiệu ứng ở giai đoạn làm đầy",
          "var": "--0hb-20-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian chạy của hiệu ứng đường viền phủ (s)",
          "var": "--0hb-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Thời gian bắt đầu của màu chữ và màu biểu tượng (s)",
          "var": "--0h-transition-shared",
          "type": "transition-duration"
        },
        {
          "label": "Thời gian kết thúc của màu chữ và màu biểu tượng (s)",
          "var": "--0-transition-shared",
          "type": "transition-duration"
        }
      ]
    },
    {
      "id": "000053",
      "type": "1",
      "name": "bong_o_ben_trong_nhieu_tang",
      "animation": {
        "animation-0": {
          "--0-transition-shared": "0.3s",
          "--0h-transition-shared": "0.3s",
          
          "--0-transition": "all var(--0-transition-shared)",

          "--0h-background-color": "#073b4c",
          "--0h-transition": "all var(--0h-transition-shared)",

          "--0h-box-shadow-spread-1-shared": "4px",
          "--0h-box-shadow-spread-2-shared": "8px",
          "--0h-box-shadow-spread-3-shared": "12px",
          "--0h-box-shadow-spread-4-shared": "16px",
          "--0h-box-shadow-color-1-shared": "#ef476f",
          "--0h-box-shadow-color-2-shared": "#ffd166",
          "--0h-box-shadow-color-3-shared": "#06d6a0",
          "--0h-box-shadow-color-4-shared": "#118ab2",
          "--0h-box-shadow": "inset 0 0 0 var(--0h-box-shadow-spread-1-shared) var(--0h-box-shadow-color-1-shared), inset 0 0 0 var(--0h-box-shadow-spread-2-shared) var(--0h-box-shadow-color-2-shared), inset 0 0 0 var(--0h-box-shadow-spread-3-shared) var(--0h-box-shadow-color-3-shared), inset 0 0 0 var(--0h-box-shadow-spread-4-shared) var(--0h-box-shadow-color-4-shared)",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "1",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "1",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu bóng tầng 1 (Tính từ ngoài vào)",
          "var": "--0h-box-shadow-color-1-shared",
          "type": "color"
        },
        {
          "label": "Màu bóng tầng 2 (Tính từ ngoài vào)",
          "var": "--0h-box-shadow-color-2-shared",
          "type": "color"
        },
        {
          "label": "Màu bóng tầng 3 (Tính từ ngoài vào)",
          "var": "--0h-box-shadow-color-3-shared",
          "type": "color"
        },
        {
          "label": "Màu bóng tầng 4 (Tính từ ngoài vào)",
          "var": "--0h-box-shadow-color-4-shared",
          "type": "color"
        },
        {
          "label": "Kích thước bóng tầng 1 (Tính từ ngoài vào)",
          "var": "--0h-box-shadow-spread-1-shared",
          "type": "box-shadow-spread"
        },
        {
          "label": "Kích thước bóng tầng 2 (Tính từ ngoài vào)",
          "var": "--0h-box-shadow-spread-2-shared",
          "type": "box-shadow-spread"
        },
        {
          "label": "Kích thước bóng tầng 3 (Tính từ ngoài vào)",
          "var": "--0h-box-shadow-spread-3-shared",
          "type": "box-shadow-spread"
        },
        {
          "label": "Kích thước bóng tầng 4 (Tính từ ngoài vào)",
          "var": "--0h-box-shadow-spread-4-shared",
          "type": "box-shadow-spread"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color animation-0-hover-box-shadow"
      }
    },
    {
      "id": "000037",
      "type": "1",
      "name": "vien_chay_dong_deu",
      "animation": {
        "animation-0": {
          "--shared-border-thickness": "2px",
          "--shared-border-style": "solid",
          "--shared-border-color": "black",
          "--shared-border": "var(--shared-border-thickness) var(--shared-border-style) var(--shared-border-color)",

          "--0-position": "relative",
          
          "--0b-position": "absolute",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0b-width": "0",
          "--0b-height": "0",
          "--0b-opacity": "0",
          "--0b-border-top": "var(--shared-border)",
          "--0b-border-right": "var(--shared-border)",
          "--0hb-top": "0",
          "--0hb-left": "0",
          "--0hb-opacity": "1",
          "--0hb-animation-duration-shared": "3s",
          "--0hb-animation-timing-function-shared": "linear",
          "--0hb-animation-iteration-count-shared": "infinite",
          "--0hb-animation-direction-shared": "alternate",
          "--0hb-animation": "button-animate-0b-border-top-right var(--0hb-animation-duration-shared) var(--0hb-animation-timing-function-shared) var(--0hb-animation-iteration-count-shared) var(--0hb-animation-direction-shared)",
          "--0bf-width": "0",
          "--0bf-height": "0",
          "--0b-50-width": "100%",
          "--0b-50-height": "0",
          "--0bt-width": "100%",
          "--0bt-height": "calc(100% - var(--shared-border-thickness))",

          "--0a-position": "absolute",
          "--0a-bottom": "0",
          "--0a-right": "0",
          "--0a-width": "0",
          "--0a-height": "0",
          "--0a-opacity": "0",
          "--0a-border-bottom": "var(--shared-border)",
          "--0a-border-left": "var(--shared-border)",
          "--0ha-right": "0",
          "--0ha-bottom": "0",
          "--0ha-opacity": "1",
          "--0ha-animation": "button-animate-0a-border-bottom-left var(--0hb-animation-duration-shared) var(--0hb-animation-timing-function-shared) var(--0hb-animation-iteration-count-shared) var(--0hb-animation-direction-shared)",
          "--0af-width": "0",
          "--0af-height": "0",
          "--0a-50-width": "100%",
          "--0a-50-height": "0",
          "--0at-width": "100%",
          "--0at-height": "calc(100% - var(--shared-border-thickness))"
        }
      },
      "customize": [
        {
          "label": "Độ dày đường viền",
          "var": "--shared-border-thickness",
          "type": "border-thickness"
        },
        {
          "label": "Kiểu đường viền",
          "var": "--shared-border-style",
          "type": "border-style"
        },
        {
          "label": "Màu đường viền",
          "var": "--shared-border-color",
          "type": "border-color"
        },
        {
          "label": "Thời gian lặp của mỗi hoạt ảnh",
          "var": "--0hb-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Kiểu chạy hiệu ứng",
          "var": "--0hb-animation-timing-function-shared",
          "type": "animation-timing-function"
        },
        {
          "label": "Lặp hoạt ảnh",
          "var": "--0hb-animation-iteration-count-shared",
          "type": "animation-iteration-count"
        },
        {
          "label": "",
          "var": "--0hb-animation-direction-shared",
          "type": "animation-direction"
        }
      ]
    },
    {
      "id": "000054",
      "type": "1",
      "name": "thanh_truot_don_tu_duoi_len_lam_day_tiep_tuc_di_len",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-transition-shared": "0.4s",
          "--0h-transition-shared": "0.4s",
          "--0b-position": "absolute",
          "--0b-background-color": "#00a859",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0b-height": "0%",
          "--0hb-height": "100%",
          "--0b-width": "100%",
          "--0b-opacity": "1",
          "--0hb-opacity": "var(--0b-opacity)",
          "--0hb-position": "absolute",
          "--0b-transition": "all var(--0-transition-shared) cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-transition": "all var(--0h-transition-shared) cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-top": "auto",
          "--0hb-bottom": "0",
          "--0hb-left": "0",
          "--0hb-width": "100%",
          "--0b-z-index": "3",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "10",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "10",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Độ mờ",
          "var": "--0b-opacity",
          "type": "opacity"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000055",
      "type": "1",
      "name": "thanh_truot_don_tu_tren_xuong_lam_day_tiep_tuc_di_xuong",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-transition-shared": "0.4s",
          "--0h-transition-shared": "0.4s",
          "--0b-position": "absolute",
          "--0b-background-color": "#00a859",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-bottom": "0",
          "--0b-left": "0",
          "--0b-height": "0%",
          "--0hb-height": "100%",
          "--0b-width": "100%",
          "--0hb-position": "absolute",
          "--0b-opacity": "1",
          "--0hb-opacity": "var(--0b-opacity)",
          "--0b-transition": "all var(--0-transition-shared) cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-transition": "all var(--0h-transition-shared) cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-top": "0",
          "--0hb-bottom": "auto",
          "--0hb-left": "0",
          "--0hb-width": "100%",
          "--0b-z-index": "3",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "10",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "10",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Độ mờ",
          "var": "--0b-opacity",
          "type": "opacity"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000056",
      "type": "1",
      "name": "thanh_truot_don_tu_trai_sang_lam_day_tiep_tuc_sang_phai",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-transition-shared": "0.4s",
          "--0h-transition-shared": "0.4s",
          "--0b-position": "absolute",
          "--0b-background-color": "#00a859",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-top": "0",
          "--0b-right": "0",
          "--0b-height": "100%",
          "--0hb-height": "100%",
          "--0b-width": "0%",
          "--0hb-position": "absolute",
          "--0b-opacity": "1",
          "--0hb-opacity": "var(--0b-opacity)",
          "--0b-transition": "all var(--0-transition-shared) cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-transition": "all var(--0h-transition-shared) cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-top": "0",
          "--0hb-left": "0",
          "--0hb-right": "auto",
          "--0hb-width": "100%",
          "--0b-z-index": "3",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "10",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "10",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Độ mờ",
          "var": "--0b-opacity",
          "type": "opacity"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000057",
      "type": "1",
      "name": "thanh_truot_don_tu_phai_sang_lam_day_tiep_tuc_sang_trai",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-transition-shared": "0.4s",
          "--0h-transition-shared": "0.4s",
          "--0b-position": "absolute",
          "--0b-background-color": "#00a859",
          "--0hb-background-color": "var(--0b-background-color)",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0b-height": "100%",
          "--0hb-height": "100%",
          "--0b-width": "0%",
          "--0hb-position": "absolute",
          "--0b-opacity": "1",
          "--0hb-opacity": "var(--0b-opacity)",
          "--0b-transition": "all var(--0-transition-shared) cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-transition": "all var(--0h-transition-shared) cubic-bezier(0.165, 0.84, 0.44, 1)",
          "--0hb-top": "0",
          "--0hb-left": "auto",
          "--0hb-right": "0",
          "--0hb-width": "100%",
          "--0b-z-index": "3",

          "--0h2-color": "#ffffff",
          "--0h2-z-index": "10",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-color": "#ffffff",
          "--0h4-z-index": "10",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0b-background-color",
          "type": "color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Độ mờ",
          "var": "--0b-opacity",
          "type": "opacity"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition-shared",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition-shared",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000058",
      "type": "1",
      "name": "nhan_manh",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0-transition-shared": "1.5s",
          "--0h-transition-shared": "1.5s",

          "--0b-content": "''",
          "--0b-position": "absolute",
          "--0b-width": "100%",
          "--0b-height": "100%",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0b-background-color": "black",
          "--0b-opacity": "0",
          "--0hb-opacity": "0.2",
          "--0b-z-index": "0",
          "--0b-transition": "var(--0-transition-shared)",

          "--0hb-filter": "grayscale(40%)",
          "--0hb-transition": "var(--0h-transition-shared)",

          "--0h2-z-index": "1",
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition-shared)",

          "--0h4-z-index": "1",
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition-shared)"
        },
        "animation-2": {
          "--2-transition": "var(--0-transition-shared)"
        },
        "animation-4": {
          "--4-transition": "var(--0-transition-shared)"
        }
      },
      "customize": [
        {
          "label": "Màu nhấn mạnh",
          "var": "--0b-background-color",
          "type": "background-color"
        },
        {
          "label": "Độ nhấn mạnh",
          "var": "--0hb-filter",
          "type": "filter"
        },
        {
          "label": "Độ mờ",
          "var": "--0hb-opacity",
          "type": "opacity"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition-shared",
          "type": "transition-duration"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition-shared",
          "type": "transition-duration"
        }
      ]
    },
    {
      "id": "000059",
      "type": "1",
      "name": "tao_bong_dang_lop",
      "animation": {
        "animation-0": {
          "--0h-filter-1-shared": "drop-shadow(5px 5px 0 rgba(240, 46, 170, 0.4))",
          "--0h-filter-2-shared": "drop-shadow(10px 10px 0 rgba(240, 46, 170, 0.3))",
          "--0h-filter-3-shared": "drop-shadow(15px 15px 0 rgba(240, 46, 170, 0.2))",
          "--0h-filter": "var(--0h-filter-1-shared) var(--0h-filter-2-shared) var(--0h-filter-3-shared)",
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s"
        }
      },
      "customize": [
        {
          "label": "Lớp 1",
          "var": "--0h-filter-1-shared",
          "type": "filter"
        },
        {
          "label": "Lớp 2",
          "var": "--0h-filter-2-shared",
          "type": "filter"
        },
        {
          "label": "Lớp 3",
          "var": "--0h-filter-3-shared",
          "type": "filter"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000060",
      "type": "1",
      "name": "vien_chay_o_goc_tren_phai_va_goc_duoi_trai",
      "animation": {
        "animation-0": {
          "--shared-line": "5px solid #ffffff",
          "--shared-line-transition": "0.4s",
          "--shared-padding": "10px",

          "--0-position": "relative",

          "--0b-position": "absolute",
          "--0b-z-index": "10",
          "--0b-width": "20px",
          "--0b-height": "20px",
          "--0b-top": "var(--shared-padding)",
          "--0b-right": "var(--shared-padding)",
          "--0b-border-top": "var(--shared-line)",
          "--0b-border-right": "var(--shared-line)",
          "--0b-transition": "all var(--shared-line-transition) linear",

          "--0hb-z-index": "10",
          "--0hb-width": "calc(100% - var(--shared-padding) * 2)",
          "--0hb-height": "calc(100% - var(--shared-padding) * 2)",
          "--0hb-transition": "all var(--shared-line-transition) linear",
          "--0hb-position": "absolute",
          "--0hb-top": "var(--shared-padding)",
          "--0hb-right": "var(--shared-padding)",

          "--0a-width": "20px",
          "--0a-height": "20px",
          "--0a-z-index": "10",
          "--0a-position": "absolute",
          "--0a-left": "var(--shared-padding)",
          "--0a-bottom": "var(--shared-padding)",
          "--0a-border-left": "var(--shared-line)",
          "--0a-border-bottom": "var(--shared-line)",
          "--0a-transition": "all var(--shared-line-transition) linear",

          "--0ha-position": "absolute",
          "--0ha-width": "calc(100% - var(--shared-padding) * 2)",
          "--0ha-height": "calc(100% - var(--shared-padding) * 2)",
          "--0ha-left": "var(--shared-padding)",
          "--0ha-bottom": "var(--shared-padding)",
          "--0ha-transition": "all var(--shared-line-transition) linear"
        }
      },
      "customize": [
        {
          "label": "Chiều dài viền trên",
          "var": "--0b-width",
          "type": "width"
        },
        {
          "label": "Chiều rộng viền trên",
          "var": "--0b-height",
          "type": "height"
        },
        {
          "label": "Chiều dài viền dưới",
          "var": "--0a-width",
          "type": "width"
        },
        {
          "label": "Chiều rộng viền dưới",
          "var": "--0a-height",
          "type": "height"
        },
        {
          "label": "Chỉnh sửa viền",
          "var": "--shared-line",
          "type": "border"
        },
        {
          "label": "Lề cho viền",
          "var": "--shared-padding",
          "type": "padding"
        },
        {
          "label": "Thời gian hiệu ứng",
          "var": "--shared-line-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000061",
      "type": "1",
      "name": "vien_chay_o_goc_tren_trai_va_goc_duoi_phai",
      "animation": {
        "animation-0": {
          "--shared-line": "5px solid #ffffff",
          "--shared-line-transition": "0.4s",
          "--shared-padding": "10px",

          "--0-position": "relative",

          "--0b-position": "absolute",
          "--0b-z-index": "10",
          "--0b-width": "20px",
          "--0b-height": "20px",
          "--0b-top": "var(--shared-padding)",
          "--0b-left": "var(--shared-padding)",
          "--0b-border-top": "var(--shared-line)",
          "--0b-border-left": "var(--shared-line)",
          "--0b-transition": "all var(--shared-line-transition) linear",

          "--0hb-z-index": "10",
          "--0hb-width": "calc(100% - var(--shared-padding) * 2)",
          "--0hb-height": "calc(100% - var(--shared-padding) * 2)",
          "--0hb-transition": "all var(--shared-line-transition) linear",
          "--0hb-position": "absolute",
          "--0hb-top": "var(--shared-padding)",
          "--0hb-left": "var(--shared-padding)",

          "--0a-width": "20px",
          "--0a-height": "20px",
          "--0a-z-index": "10",
          "--0a-position": "absolute",
          "--0a-right": "var(--shared-padding)",
          "--0a-bottom": "var(--shared-padding)",
          "--0a-border-right": "var(--shared-line)",
          "--0a-border-bottom": "var(--shared-line)",
          "--0a-transition": "all var(--shared-line-transition) linear",

          "--0ha-position": "absolute",
          "--0ha-width": "calc(100% - var(--shared-padding) * 2)",
          "--0ha-height": "calc(100% - var(--shared-padding) * 2)",
          "--0ha-right": "var(--shared-padding)",
          "--0ha-bottom": "var(--shared-padding)",
          "--0ha-transition": "all var(--shared-line-transition) linear"
        }
      },
      "customize": [
        {
          "label": "Chiều dài viền trên",
          "var": "--0b-width",
          "type": "width"
        },
        {
          "label": "Chiều rộng viền trên",
          "var": "--0b-height",
          "type": "height"
        },
        {
          "label": "Chiều dài viền dưới",
          "var": "--0a-width",
          "type": "width"
        },
        {
          "label": "Chiều rộng viền dưới",
          "var": "--0a-height",
          "type": "height"
        },
        {
          "label": "Chỉnh sửa viền",
          "var": "--shared-line",
          "type": "border"
        },
        {
          "label": "Lề cho viền",
          "var": "--shared-padding",
          "type": "padding"
        },
        {
          "label": "Thời gian hiệu ứng",
          "var": "--shared-line-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000062",
      "type": "1",
      "name": "vien_xoay",
      "animation": {
        "animation-0": {
          "--0-position": "relative",

          "--0b-width-expanded": "-10px",
          "--0b-height-expanded": "-10px",

          "--0b-position": "absolute",
          "--0b-z-index": "10",
          "--0b-width": "calc(100% + var(--0b-width-expanded) * 2)",
          "--0b-height": "calc(100% + var(--0b-height-expanded) * 2)",
          "--0b-top": "50%",
          "--0b-left": "50%",
          "--0b-border-top": "5px solid #000000",
          "--0b-border-bottom": "5px solid #000000",
          "--0b-border-left": "5px solid #000000",
          "--0b-border-right": "5px solid #000000",
          "--0b-border-radius": "6px 6px 6px 6px",
          "--0b-opacity": "1",
          "--0b-transition": "0.3s",

          "--0b-transform-rotate-shared": "rotate(2deg)",
          "--0b-transform": "translate(-50%, -50%) var(--0b-transform-rotate-shared)",
          "--0hb-transform-rotate-shared": "rotate(0deg)",
          "--0hb-transform": "translate(-50%, -50%) var(--0hb-transform-rotate-shared)",

          "--0hb-width": "var(--0b-width)",
          "--0hb-height": "var(--0b-height)",
          "--0hb-z-index": "var(--0b-z-index)",
          "--0hb-opacity": "0",
          "--0hb-left": "var(--0b-left)",
          "--0hb-top": "var(--0b-top)",
          "--0hb-transition": "0.3s",
          "--0hb-position": "absolute"
        }
      },
      "customize": [
        {
          "label": "Chiều dài (Thêm hoặc bớt đi dựa trên khung đứng yên là gốc) của khung xoay",
          "var": "--0b-width-expanded",
          "type": "width",
          "min": -300
        },
        {
          "label": "Chiều rộng (Thêm hoặc bớt đi dựa trên khung đứng yên là gốc) của khung xoay",
          "var": "--0b-height-expanded",
          "type": "height",
          "min": -300
        },
        {
          "label": "Viền trái của viền xoay",
          "var": "--0b-border-left",
          "type": "border"
        },
        {
          "label": "Viền phải của viền xoay",
          "var": "--0b-border-right",
          "type": "border"
        },
        {
          "label": "Viền dưới của viền xoay",
          "var": "--0b-border-bottom",
          "type": "border"
        },
        {
          "label": "Viền trên của viền xoay",
          "var": "--0b-border-top",
          "type": "border"
        },
        {
          "label": "Bo góc của viền xoay",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Độ mờ khi bắt đầu",
          "var": "--0b-opacity",
          "type": "opacity"
        },
        {
          "label": "Độ mờ khi kết thúc",
          "var": "--0hb-opacity",
          "type": "opacity"
        },
        {
          "label": "Xoay khi bắt đầu",
          "var": "--0b-transform-rotate-shared",
          "type": "transform"
        },
        {
          "label": "Xoay khi kết thúc",
          "var": "--0hb-transform-rotate-shared",
          "type": "transform"
        },
        {
          "label": "Lớp",
          "var": "--0b-z-index",
          "type": "z-index"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0hb-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0b-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000063",
      "type": "1",
      "name": "doi_mau_va_vien_xoay",
      "animation": {
        "animation-0": {
          "--0-position": "relative",
          "--0-transition": "0.3s",

          "--0h-transition": "0.3s",
          "--0h-background-color": "#00a859",

          "--0b-width-expanded": "-10px",
          "--0b-height-expanded": "-10px",

          "--0b-position": "absolute",
          "--0b-z-index": "10",
          "--0b-width": "calc(100% + var(--0b-width-expanded) * 2)",
          "--0b-height": "calc(100% + var(--0b-height-expanded) * 2)",
          "--0b-top": "50%",
          "--0b-left": "50%",
          "--0b-border-top": "5px solid #000000",
          "--0b-border-bottom": "5px solid #000000",
          "--0b-border-left": "5px solid #000000",
          "--0b-border-right": "5px solid #000000",
          "--0b-border-radius": "6px 6px 6px 6px",
          "--0b-opacity": "1",
          "--0b-transition": "var(--0-transition)",

          "--0b-transform-rotate-shared": "rotate(2deg)",
          "--0b-transform": "translate(-50%, -50%) var(--0b-transform-rotate-shared)",
          "--0hb-transform-rotate-shared": "rotate(0deg)",
          "--0hb-transform": "translate(-50%, -50%) var(--0hb-transform-rotate-shared)",

          "--0hb-width": "var(--0b-width)",
          "--0hb-height": "var(--0b-height)",
          "--0hb-z-index": "var(--0b-z-index)",
          "--0hb-opacity": "0",
          "--0hb-left": "var(--0b-left)",
          "--0hb-top": "var(--0b-top)",
          "--0hb-transition": "var(--0h-transition)",
          "--0hb-position": "absolute"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-z-index": "20",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-z-index": "20",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền của nút",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "",
          "var": "null",
          "type": "null"
        },
        {
          "label": "Chiều dài (Thêm hoặc bớt đi dựa trên khung đứng yên là gốc) của khung xoay",
          "var": "--0b-width-expanded",
          "type": "width",
          "min": -300
        },
        {
          "label": "Chiều rộng (Thêm hoặc bớt đi dựa trên khung đứng yên là gốc) của khung xoay",
          "var": "--0b-height-expanded",
          "type": "height",
          "min": -300
        },
        {
          "label": "Viền trái của viền xoay",
          "var": "--0b-border-left",
          "type": "border"
        },
        {
          "label": "Viền phải của viền xoay",
          "var": "--0b-border-right",
          "type": "border"
        },
        {
          "label": "Viền dưới của viền xoay",
          "var": "--0b-border-bottom",
          "type": "border"
        },
        {
          "label": "Viền trên của viền xoay",
          "var": "--0b-border-top",
          "type": "border"
        },
        {
          "label": "Bo góc của viền xoay",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Độ mờ khi bắt đầu",
          "var": "--0b-opacity",
          "type": "opacity"
        },
        {
          "label": "Độ mờ khi kết thúc",
          "var": "--0hb-opacity",
          "type": "opacity"
        },
        {
          "label": "Xoay khi bắt đầu",
          "var": "--0b-transform-rotate-shared",
          "type": "transform"
        },
        {
          "label": "Xoay khi kết thúc",
          "var": "--0hb-transform-rotate-shared",
          "type": "transform"
        },
        {
          "label": "Lớp",
          "var": "--0b-z-index",
          "type": "z-index"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0":"animation-0-hover-background-color",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000064",
      "type": "1",
      "name": "nen_gradient_chay",
      "animation": {
        "animation-0": {
          "--0-background-image-linear-direction-shared": "15deg",
          "--0-background-image-linear-color-1-shared": "#880088",
          "--0-background-image-linear-color-2-shared": "#aa2068",
          "--0-background-image-linear-color-3-shared": "#cc3f47",
          "--0-background-image-linear-color-4-shared": "#de6f3d",
          "--0-background-image-linear-color-5-shared": "#f09f33",
          "--0-background-image": "linear-gradient(var(--0-background-image-linear-direction-shared), var(--0-background-image-linear-color-1-shared), var(--0-background-image-linear-color-2-shared), var(--0-background-image-linear-color-3-shared), var(--0-background-image-linear-color-4-shared), var(--0-background-image-linear-color-5-shared), var(--0-background-image-linear-color-4-shared), var(--0-background-image-linear-color-3-shared), var(--0-background-image-linear-color-2-shared), var(--0-background-image-linear-color-1-shared))",

          "--0-background-repeat": "no-repeat",
          "--0-background-size": "300%",
          "--0-background-position-x-shared": "left",
          "--0-background-position-y-shared": "center",
          "--0-background-position": "var(--0-background-position-x-shared) var(--0-background-position-y-shared)",
          "--0-transition": "0.3s",

          "--0h-background-size": "320%",
          "--0h-background-position-x-shared": "right",
          "--0h-background-position-y-shared": "center",
          "--0h-background-position": "var(--0h-background-position-x-shared) var(--0h-background-position-y-shared)",
          "--0h-transition": "0.3s"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-z-index": "20",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-z-index": "20",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Điều chỉnh hướng của nền",
          "var": "--0-background-image-linear-direction-shared",
          "type": "background-image-gradient-direction"
        },
        {
          "label": "Màu nền 1 (Ngoài cùng)",
          "var": "--0-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 2",
          "var": "--0-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 3",
          "var": "--0-background-image-linear-color-3-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 4",
          "var": "--0-background-image-linear-color-4-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 5 (Trong cùng)",
          "var": "--0-background-image-linear-color-5-shared",
          "type": "background-color"
        },
        {
          "label": "Vị trí nền trên trục ngang lúc bắt đầu",
          "var": "--0-background-position-x-shared",
          "type": "background-position-x-keyword"
        },
        {
          "label": "Vị trí nền trên trục dọc lúc bắt đầu",
          "var": "--0-background-position-y-shared",
          "type": "background-position-y-keyword"
        },
        {
          "label": "Vị trí nền trên trục ngang lúc kết thúc",
          "var": "--0h-background-position-x-shared",
          "type": "background-position-x-keyword"
        },
        {
          "label": "Vị trí nền trên trục dọc lúc kết thúc",
          "var": "--0h-background-position-y-shared",
          "type": "background-position-y-keyword"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000065",
      "type": "1",
      "name": "lat_sach",
      "animation": {
        "animation-0": {
          "--0-position": "relative",

          "--0b-position": "absolute",
          "--0b-width": "0",
          "--0b-height": "0",
          "--0b-top": "0",
          "--0b-left": "0",
          "--0b-bottom": "null",
          "--0b-right": "null",
          "--0b-border-radius": "0 0 8px 0",
          "--0b-transition": "0.3s",
          "--0b-z-index": "10",
          
          "--0b-background-image-linear-direction-shared": "135deg",
          "--0b-background-image-linear-color-bg-shared": "black",
          "--0b-background-image-linear-color-flexure-shared": "green",
          "--0b-background-image-linear-color-corner-shared": "yellow",
          "--0b-background-image": "linear-gradient(var(--0b-background-image-linear-direction-shared), var(--0b-background-image-linear-color-bg-shared) 0%, var(--0b-background-image-linear-color-bg-shared) 50%, var(--0b-background-image-linear-color-flexure-shared) 50%, var(--0b-background-image-linear-color-corner-shared) 60%)",
          
          "--0hb-box-shadow": "0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3)",
          "--0hb-width": "1.6rem",
          "--0hb-height": "var(--0hb-width)",
          "--0hb-left": "var(--0b-left)",
          "--0hb-top": "var(--0b-top)",
          "--0hb-bottom": "var(--0b-bottom)",
          "--0hb-right": "var(--0b-right)",
          "--0hb-transition": "0.3s",
          "--0hb-position": "absolute"
        }
      },
      "customize": [
        {
          "label": "Điều hướng màu nền của miếng lật sách",
          "var": "--0b-background-image-linear-direction-shared",
          "type": "background-image-gradient-direction"
        },
        {
          "label": "Màu nền phía dưới của miếng lật sách",
          "var": "--0b-background-image-linear-color-bg-shared",
          "type": "background-color"
        },
        {
          "label": "Màu của độ cong khi lật của miếng lật sách",
          "var": "--0b-background-image-linear-color-flexure-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền của miếng lật sách",
          "var": "--0b-background-image-linear-color-corner-shared",
          "type": "background-color"
        },
        {
          "label": "Kích thước của miếng lật sách",
          "var": "--0hb-width",
          "type": "width",
          "max": 20,
          "unit": "rem"
        },
        {
          "label": "Vị trí bên trên của miếng lật sách",
          "var": "--0b-top",
          "type": "top"
        },
        {
          "label": "Vị trí bên trái của miếng lật sách",
          "var": "--0b-left",
          "type": "left"
        },
        {
          "label": "Vị trí bên dưới của miếng lật sách",
          "var": "--0b-bottom",
          "type": "bottom"
        },
        {
          "label": "Vị trí bên phải của miếng lật sách",
          "var": "--0b-right",
          "type": "right"
        },
        {
          "label": "Bo góc của miếng lật sách",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Lớp của miếng lật sách",
          "var": "--0b-z-index",
          "type": "z-index"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0hb-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0b-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000066",
      "type": "1",
      "name": "nen_gradient_lap_chay_va_co_bong_chu",
      "animation": {
        "animation-0": {
          "--0-background-image-linear-direction-shared": "40deg",
          "--0-background-image-linear-color-1-shared": "#716eef",
          "--0-background-image-linear-color-2-shared": "#fbb8a9",
          "--0-background-image-linear-color-gradient-shared": "#c15b44",
          "--0-background-image": "repeating-linear-gradient(var(--0-background-image-linear-direction-shared), var(--0-background-image-linear-color-1-shared) 0%,var(--0-background-image-linear-color-1-shared) 5%, var(--0-background-image-linear-color-2-shared) 5%, var(--0-background-image-linear-color-gradient-shared) 10%)",
          "--0-transition": "0.3s",

          "--0h-background-position": "120px",
          "--0h-background-image": "var(--0-background-image)",
          "--0h-transition": "0.3s"
        },
        "animation-2": {
          "--2-text-shadow": "1px 1px 0rem #000000",
          "--0h2-color": "#ffffff",
          "--0h2-text-shadow": "2px 2px 0.2rem #000000",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Bóng chữ khi bắt đầu",
          "var": "--2-text-shadow",
          "type": "text-shadow"
        },
        {
          "label": "Bóng chữ khi kết thúc",
          "var": "--0h2-text-shadow",
          "type": "text-shadow"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Điều chỉnh hướng của nền",
          "var": "--0-background-image-linear-direction-shared",
          "type": "background-image-gradient-direction"
        },
        {
          "label": "Màu nền 1",
          "var": "--0-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 2",
          "var": "--0-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền gradient",
          "var": "--0-background-image-linear-color-gradient-shared",
          "type": "background-color"
        },
        {
          "label": "Vị trí nền",
          "var": "--0h-background-position",
          "type": "background-position-x"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000067",
      "type": "1",
      "name": "do_bong_co_cau_hinh_kich_thuoc_bong",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",
          "--0h-box-shadow": "0 0 0.5rem #00a859"
        }
      },
      "customize": [
        {
          "label": "",
          "var": "--0h-box-shadow",
          "type": "box-shadow"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-box-shadow"
      }
    },
    {
      "id": "000068",
      "type": "1",
      "name": "nhieu_cham_lam_day",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",

          "--0h-background-color-shared": "#00a859",
          "--0h-background-image": "radial-gradient(circle, var(--0h-background-color-shared) 0.2rem, transparent 0.3rem), radial-gradient(circle, var(--0h-background-color-shared) 0.2rem, transparent 0.3rem)",
          "--0h-background-position": "6rem 6rem, 0 0",

          "--0h-background-size-1-width-shared": "1rem",
          "--0h-background-size-1-height-shared": "1rem",
          "--0h-background-size-2-width-shared": "1rem",
          "--0h-background-size-2-height-shared": "1rem",
          "--0h-background-size": "var(--0h-background-size-1-width-shared) var(--0h-background-size-1-height-shared), var(--0h-background-size-2-width-shared) var(--0h-background-size-2-height-shared)",

          "--0h-animation-duration-shared": "0.24s",
          "--0h-animation-timing-function-shared": "linear",
          "--0h-animation":"button-animate-0h-1 var(--0h-animation-duration-shared) var(--0h-animation-timing-function-shared) forwards",

          "--0hf-background-size": "var(--0h-background-size)",
          "--0ht-background-size": "2.375rem 2.375rem, 0.1rem 0.1rem"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu chấm và màu nền",
          "var": "--0h-background-color-shared",
          "type": "background-color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Chiều dài của chấm 1",
          "var": "--0h-background-size-1-width-shared",
          "type": "number-unit-customize",
          "unit": "rem",
          "step": 0.01,
          "min": 0,
          "max": 10
        },
        {
          "label": "Chiều cao của chấm 1",
          "var": "--0h-background-size-1-height-shared",
          "type": "number-unit-customize",
          "unit": "rem",
          "step": 0.01,
          "min": 0,
          "max": 10
        },
        {
          "label": "Chiều dài của chấm 2",
          "var": "--0h-background-size-2-width-shared",
          "type": "number-unit-customize",
          "unit": "rem",
          "step": 0.01,
          "min": 0,
          "max": 10
        },
        {
          "label": "Chiều cao của chấm 2",
          "var": "--0h-background-size-2-height-shared",
          "type": "number-unit-customize",
          "unit": "rem",
          "step": 0.01,
          "min": 0,
          "max": 10
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000069",
      "type": "1",
      "name": "doi_mau_va_xoay_bieu_tuong",
      "animation": {
        "animation-0": {
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s",
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0h-background-color": "#00a859"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transform": "rotate(360deg)",
          "--0h4-transition": "var(--0h-transition)",
          "--0h4-transform-origin-x-shared": "center",
          "--0h4-transform-origin-y-shared": "center",
          "--0h4-transform-origin": "var(--0h4-transform-origin-x-shared) var(--0h4-transform-origin-y-shared)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Xoay biểu tượng",
          "var": "--0h4-transform",
          "type": "transform"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Tâm trục ngang của hiệu ứng",
          "var": "--0h4-transform-origin-x-shared",
          "type": "transform-origin-x"
        },
        {
          "label": "Tâm trục dọc của hiệu ứng",
          "var": "--0h4-transform-origin-y-shared",
          "type": "transform-origin-y"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000070",
      "type": "1",
      "name": "doi_mau_va_gian_cach_chu_bieu_tuong",
      "animation": {
        "animation-0": {
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s",
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0h-background-color": "#00a859",
          "--0h-gap": "8px"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Giãn cách chữ và biểu tượng",
          "var": "--0h-gap",
          "type": "number-unit-customize",
          "unit": "px",
          "step": 1,
          "min": 0,
          "max": 100
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color animation-0-hover-gap",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000071",
      "type": "1",
      "name": "nen_nhieu_cham",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",

          "--0h-background-color-shared": "#00a859",
          "--0h-background-image": "radial-gradient(circle, var(--0h-background-color-shared) 0.2rem, transparent 0.3rem)",

          "--0h-background-size-width-shared": "1rem",
          "--0h-background-size-height-shared": "1rem",
          "--0h-background-size": "var(--0h-background-size-width-shared) var(--0h-background-size-height-shared)"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu chấm",
          "var": "--0h-background-color-shared",
          "type": "background-color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Chiều dài của chấm",
          "var": "--0h-background-size-width-shared",
          "type": "number-unit-customize",
          "unit": "rem",
          "step": 0.01,
          "min": 0,
          "max": 10
        },
        {
          "label": "Chiều cao của chấm",
          "var": "--0h-background-size-height-shared",
          "type": "number-unit-customize",
          "unit": "rem",
          "step": 0.01,
          "min": 0,
          "max": 10
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000072",
      "type": "1",
      "name": "gach_chan_chu_va_doi_mau_bieu_tuong",
      "animation": {
        "animation-0": {
          "--0h-transition": "0.3s",
          "--0-transition": "0.3s",
          "--0-position": "relative",
          "--0-overflow": "hidden",
          "--0h-background-color": "#333333"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-overflow": "visible",

          "--0h2-text-decoration-line-shared": "underline",
          "--0h2-text-decoration-color-shared": "#ffffff",
          "--0h2-text-decoration-style-shared": "solid",
          "--0h2-text-decoration-thickness-shared": "1px",
          "--0h2-text-decoration": "var(--0h2-text-decoration-line-shared) var(--0h2-text-decoration-color-shared) var(--0h2-text-decoration-style-shared) var(--0h2-text-decoration-thickness-shared)",

          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-3": {
          "--0h3-background-color": "#00a859",
          "--0h3-border-radius": "50px 50px 50px 50px",
          "--0h3-border-top": "2px solid #ffffff",
          "--0h3-border-bottom": "2px solid #ffffff",
          "--0h3-border-left": "2px solid #ffffff",
          "--0h3-border-right": "2px solid #ffffff",
          "--0h3-filter": "drop-shadow(0px 0px 0px #000000)",
          "--0h3-padding-horizontal-shared": "8px",
          "--0h3-padding-vertical-shared": "8px",
          "--0h3-padding": "var(--0h3-padding-vertical-shared) var(--0h3-padding-horizontal-shared)",
          "--0h3-transition": "var(--0h-transition)",
          "--3-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Kiểu gạch chân chữ",
          "var": "--0h2-text-decoration-line-shared",
          "type": "text-decoration-line"
        },
        {
          "label": "Màu gạch chân chữ",
          "var": "--0h2-text-decoration-color-shared",
          "type": "text-decoration-color"
        },
        {
          "label": "Loại gạch chân chữ",
          "var": "--0h2-text-decoration-style-shared",
          "type": "text-decoration-style"
        },
        {
          "label": "Độ dày của gạch chân chữ",
          "var": "--0h2-text-decoration-thickness-shared",
          "type": "text-decoration-thickness"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Nền biểu tượng",
          "var": "--0h3-background-color",
          "type": "background-color"
        },
        {
          "label": "Độ dài của nền biểu tượng",
          "var": "--0h3-padding-horizontal-shared",
          "type": "padding"
        },
        {
          "label": "Độ cao của nền biểu tượng",
          "var": "--0h3-padding-vertical-shared",
          "type": "padding"
        },
        {
          "label": "Bo góc của nền biểu tượng",
          "var": "--0h3-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Đổ bóng của nền biểu tượng",
          "var": "--0h3-filter",
          "type": "filter"
        },
        {
          "label": "Viền trên của nền biểu tượng",
          "var": "--0h3-border-top",
          "type": "border"
        },
        {
          "label": "Viền dưới của nền biểu tượng",
          "var": "--0h3-border-bottom",
          "type": "border"
        },
        {
          "label": "Viền trái của nền biểu tượng",
          "var": "--0h3-border-left",
          "type": "border"
        },
        {
          "label": "Viền phải của nền biểu tượng",
          "var": "--0h3-border-right",
          "type": "border"
        },
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color",
        "animation-2": "animation-0-hover-animation-2-text-decoration animation-0-hover-animation-2-overflow",
        "animation-3": "animation-0-hover-animation-3-padding-horizontal-shared animation-0-hover-animation-3-padding-vertical-shared animation-0-hover-animation-3-background-color animation-0-hover-animation-3-border-radius animation-0-hover-animation-3-border-top animation-0-hover-animation-3-border-right animation-0-hover-animation-3-border-bottom animation-0-hover-animation-3-border-left animation-0-hover-animation-3-filter",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000073",
      "type": "1",
      "name": "nen_gradient",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",

          "--0h-background-image-linear-direction-shared": "45deg",
          "--0h-background-image-linear-color-1-shared": "#00a859",
          "--0h-background-image-linear-color-2-shared": "#0700ff",
          "--0h-background-image": "linear-gradient(var(--0h-background-image-linear-direction-shared), var(--0h-background-image-linear-color-1-shared), var(--0h-background-image-linear-color-2-shared))"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Điều chỉnh hướng của nền",
          "var": "--0h-background-image-linear-direction-shared",
          "type": "background-image-gradient-direction"
        },
        {
          "label": "Màu nền 1",
          "var": "--0h-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 2",
          "var": "--0h-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-image",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000074",
      "name": "nen_co_nhieu_mau_chay_lien_tuc_tu_trai_sang_phai",
      "animation": {
        "animation-0": {
          "--0h-background-image-linear-color-1-shared": "rgb(250, 82, 82)",
          "--0h-background-image-linear-color-2-shared": "rgb(190, 75, 219)",
          "--0h-background-image-linear-color-3-shared": "rgb(76, 110, 245)",
          "--0h-background-image-linear-color-4-shared": "rgb(64, 192, 87)",
          "--0h-background-image-linear-color-5-shared": "rgb(250, 176, 5)",
          "--0h-background-image-linear-color-6-shared": "rgb(253, 126, 20)",
          "--0h-background-image": "linear-gradient(to right, var(--0h-background-image-linear-color-1-shared), var(--0h-background-image-linear-color-1-shared) 16.65%, var(--0h-background-image-linear-color-2-shared) 16.65%, var(--0h-background-image-linear-color-2-shared) 33.3%, var(--0h-background-image-linear-color-3-shared) 33.3%, var(--0h-background-image-linear-color-3-shared) 49.95%, var(--0h-background-image-linear-color-4-shared) 49.95%, var(--0h-background-image-linear-color-4-shared) 66.6%, var(--0h-background-image-linear-color-5-shared) 66.6%, var(--0h-background-image-linear-color-5-shared) 83.25%, var(--0h-background-image-linear-color-6-shared) 83.25%, var(--0h-background-image-linear-color-6-shared) 100%, var(--0h-background-image-linear-color-1-shared) 100%)",
          
          "--0h-animation-duration-shared": "2s",
          "--0h-animation-timing-function-shared": "linear",
          "--0h-animation-iteration-count-shared": "infinite",
          "--0h-animation": "button-animate-0h-1 var(--0h-animation-duration-shared) var(--0h-animation-timing-function-shared) var(--0h-animation-iteration-count-shared)",

          "--0hf-background-position": "0",
          "--0ht-background-position": "var(--0-width-shared)",

          "--0h-transition": "0.3s",
          "--0-transition": "0.3s"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền 1",
          "var": "--0h-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 2",
          "var": "--0h-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 3",
          "var": "--0h-background-image-linear-color-3-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 4",
          "var": "--0h-background-image-linear-color-4-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 5",
          "var": "--0h-background-image-linear-color-5-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 6",
          "var": "--0h-background-image-linear-color-6-shared",
          "type": "background-color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian hiệu ứng của nền (s)",
          "var": "--0h-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Kiểu hiệu ứng của nền (s)",
          "var": "--0h-animation-timing-function-shared",
          "type": "animation-timing-function"
        }
      ]
    },
    {
      "id": "000075",
      "name": "nen_co_nhieu_mau_chay_lien_tuc_tu_phai_sang_trai",
      "animation": {
        "animation-0": {
          "--0h-background-image-linear-color-1-shared": "rgb(250, 82, 82)",
          "--0h-background-image-linear-color-2-shared": "rgb(190, 75, 219)",
          "--0h-background-image-linear-color-3-shared": "rgb(76, 110, 245)",
          "--0h-background-image-linear-color-4-shared": "rgb(64, 192, 87)",
          "--0h-background-image-linear-color-5-shared": "rgb(250, 176, 5)",
          "--0h-background-image-linear-color-6-shared": "rgb(253, 126, 20)",
          "--0h-background-image": "linear-gradient(to right, var(--0h-background-image-linear-color-1-shared), var(--0h-background-image-linear-color-1-shared) 16.65%, var(--0h-background-image-linear-color-2-shared) 16.65%, var(--0h-background-image-linear-color-2-shared) 33.3%, var(--0h-background-image-linear-color-3-shared) 33.3%, var(--0h-background-image-linear-color-3-shared) 49.95%, var(--0h-background-image-linear-color-4-shared) 49.95%, var(--0h-background-image-linear-color-4-shared) 66.6%, var(--0h-background-image-linear-color-5-shared) 66.6%, var(--0h-background-image-linear-color-5-shared) 83.25%, var(--0h-background-image-linear-color-6-shared) 83.25%, var(--0h-background-image-linear-color-6-shared) 100%, var(--0h-background-image-linear-color-1-shared) 100%)",
          
          "--0h-animation-duration-shared": "2s",
          "--0h-animation-timing-function-shared": "linear",
          "--0h-animation-iteration-count-shared": "infinite",
          "--0h-animation": "button-animate-0h-1 var(--0h-animation-duration-shared) var(--0h-animation-timing-function-shared) var(--0h-animation-iteration-count-shared)",

          "--0hf-background-position": "0",
          "--0ht-background-position": "calc(-1 * var(--0-width-shared))",

          "--0h-transition": "0.3s",
          "--0-transition": "0.3s"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền 1",
          "var": "--0h-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 2",
          "var": "--0h-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 3",
          "var": "--0h-background-image-linear-color-3-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 4",
          "var": "--0h-background-image-linear-color-4-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 5",
          "var": "--0h-background-image-linear-color-5-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 6",
          "var": "--0h-background-image-linear-color-6-shared",
          "type": "background-color"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian hiệu ứng của nền (s)",
          "var": "--0h-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Kiểu hiệu ứng của nền (s)",
          "var": "--0h-animation-timing-function-shared",
          "type": "animation-timing-function"
        }
      ]
    },
    {
      "id": "000076",
      "name": "nen_gradient_chay_lien_tuc_tu_trai_sang_phai",
      "animation": {
        "animation-0": {
          "--0h-background-image-linear-direction-shared": "90deg",
          "--0h-background-image-linear-color-1-shared": "#53cbef",
          "--0h-background-image-linear-color-2-shared": "#dcc66c",
          "--0h-background-image-linear-color-3-shared": "#ffa3b6",
          "--0h-background-image": "linear-gradient(var(--0h-background-image-linear-direction-shared), var(--0h-background-image-linear-color-1-shared) 0%, var(--0h-background-image-linear-color-2-shared) 50%, var(--0h-background-image-linear-color-3-shared) 75%, var(--0h-background-image-linear-color-1-shared) 100%)",
          
          "--0h-animation-duration-shared": "5s",
          "--0h-animation-timing-function-shared": "linear",
          "--0h-animation-iteration-count-shared": "infinite",
          "--0h-animation": "button-animate-0h-1 var(--0h-animation-duration-shared) var(--0h-animation-timing-function-shared) var(--0h-animation-iteration-count-shared)",

          "--0hf-background-position": "0",
          "--0ht-background-position": "var(--0-width-shared)",

          "--0h-transition": "0.3s",
          "--0-transition": "0.3s"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền 1",
          "var": "--0h-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 2",
          "var": "--0h-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 3",
          "var": "--0h-background-image-linear-color-3-shared",
          "type": "background-color"
        },
        {
          "label": "Thời gian hiệu ứng của nền (s)",
          "var": "--0h-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Kiểu hiệu ứng của nền (s)",
          "var": "--0h-animation-timing-function-shared",
          "type": "animation-timing-function"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu của đổi màu chữ và các biểu tượng (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc của đổi màu chữ và các biểu tượng (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000077",
      "name": "nen_gradient_chay_lien_tuc_tu_phai_sang_trai",
      "animation": {
        "animation-0": {
          "--0h-background-image-linear-direction-shared": "90deg",
          "--0h-background-image-linear-color-1-shared": "#53cbef",
          "--0h-background-image-linear-color-2-shared": "#dcc66c",
          "--0h-background-image-linear-color-3-shared": "#ffa3b6",
          "--0h-background-image": "linear-gradient(var(--0h-background-image-linear-direction-shared), var(--0h-background-image-linear-color-1-shared) 0%, var(--0h-background-image-linear-color-2-shared) 50%, var(--0h-background-image-linear-color-3-shared) 75%, var(--0h-background-image-linear-color-1-shared) 100%)",
          
          "--0h-animation-duration-shared": "5s",
          "--0h-animation-timing-function-shared": "linear",
          "--0h-animation-iteration-count-shared": "infinite",
          "--0h-animation": "button-animate-0h-1 var(--0h-animation-duration-shared) var(--0h-animation-timing-function-shared) var(--0h-animation-iteration-count-shared)",

          "--0hf-background-position": "0",
          "--0ht-background-position": "calc(-1 * var(--0-width-shared))",

          "--0h-transition": "0.3s",
          "--0-transition": "0.3s"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền 1",
          "var": "--0h-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 2",
          "var": "--0h-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 3",
          "var": "--0h-background-image-linear-color-3-shared",
          "type": "background-color"
        },
        {
          "label": "Thời gian hiệu ứng của nền (s)",
          "var": "--0h-animation-duration-shared",
          "type": "animation-duration"
        },
        {
          "label": "Kiểu hiệu ứng của nền (s)",
          "var": "--0h-animation-timing-function-shared",
          "type": "animation-timing-function"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu của đổi màu chữ và các biểu tượng (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc của đổi màu chữ và các biểu tượng (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ]
    },
    {
      "id": "000078",
      "type": "1",
      "name": "nen_gradient_va_chu_gradient",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",

          "--0h-background-image-linear-direction-shared": "45deg",
          "--0h-background-image-linear-color-1-shared": "#00a859",
          "--0h-background-image-linear-color-2-shared": "#0700ff",
          "--0h-background-image": "linear-gradient(var(--0h-background-image-linear-direction-shared), var(--0h-background-image-linear-color-1-shared), var(--0h-background-image-linear-color-2-shared))"
        },
        "animation-2": {
          "--0h2-background-image-linear-direction-shared": "45deg",
          "--0h2-background-image-linear-color-1-shared": "#0700ff",
          "--0h2-background-image-linear-color-2-shared": "#00a859",
          "--0h2-background-image": "linear-gradient(var(--0h2-background-image-linear-direction-shared), var(--0h2-background-image-linear-color-1-shared), var(--0h2-background-image-linear-color-2-shared))",

          "--0h2-background-clip": "text",
          "--0h2-webkit-background-clip": "var(--0h2-background-clip)",
          "--0h2-webkit-text-fill-color": "transparent",

          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Điều chỉnh hướng của nền",
          "var": "--0h-background-image-linear-direction-shared",
          "type": "background-image-gradient-direction"
        },
        {
          "label": "Màu nền 1",
          "var": "--0h-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu nền 2",
          "var": "--0h-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Điều chỉnh hướng của chữ",
          "var": "--0h2-background-image-linear-direction-shared",
          "type": "background-image-gradient-direction"
        },
        {
          "label": "Màu chữ 1",
          "var": "--0h2-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu chữ 2",
          "var": "--0h2-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000079",
      "type": "1",
      "name": "chu_gradient",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",
          "--0h-background-color":"#00a859"
        },
        "animation-2": {
          "--0h2-background-image-linear-direction-shared": "45deg",
          "--0h2-background-image-linear-color-1-shared": "#0700ff",
          "--0h2-background-image-linear-color-2-shared": "#00a859",
          "--0h2-background-image": "linear-gradient(var(--0h2-background-image-linear-direction-shared), var(--0h2-background-image-linear-color-1-shared), var(--0h2-background-image-linear-color-2-shared))",

          "--0h2-background-clip": "text",
          "--0h2-webkit-background-clip": "var(--0h2-background-clip)",
          "--0h2-webkit-text-fill-color": "transparent",

          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Điều chỉnh hướng của chữ",
          "var": "--0h2-background-image-linear-direction-shared",
          "type": "background-image-gradient-direction"
        },
        {
          "label": "Màu chữ 1",
          "var": "--0h2-background-image-linear-color-1-shared",
          "type": "background-color"
        },
        {
          "label": "Màu chữ 2",
          "var": "--0h2-background-image-linear-color-2-shared",
          "type": "background-color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000080",
      "type": "1",
      "name": "doi_mau_va_bo_goc",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",
          "--0h-background-color":"#00a859",
          "--0h-border-radius": "50px 50px 50px 50px"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Bo góc",
          "var": "--0h-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color animation-0-hover-border-radius",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000081",
      "type": "1",
      "name": "doi_mau_va_kieu_mau_vien",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",
          "--0h-background-color":"#00a859",
          "--0h-border-top": "1px solid #0000ff",
          "--0h-border-right": "1px solid #0000ff",
          "--0h-border-bottom": "1px solid #0000ff",
          "--0h-border-left": "1px solid #0000ff"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Viền trên",
          "var": "--0h-border-top",
          "type": "border"
        },
        {
          "label": "Viền dưới",
          "var": "--0h-border-bottom",
          "type": "border"
        },
        {
          "label": "Viền trái",
          "var": "--0h-border-left",
          "type": "border"
        },
        {
          "label": "Viền phải",
          "var": "--0h-border-right",
          "type": "border"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color animation-0-hover-border-top animation-0-hover-border-right animation-0-hover-border-bottom animation-0-hover-border-left",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000082",
      "type": "1",
      "name": "doi_mau_nen_bo_goc_va_kieu_mau_vien",
      "animation": {
        "animation-0": {
          "--0-transition": "0.24s",
          "--0h-transition": "0.24s",
          "--0h-background-color":"#00a859",
          "--0h-border-radius": "50px 50px 50px 50px",
          "--0h-border-top": "1px solid #0000ff",
          "--0h-border-right": "1px solid #0000ff",
          "--0h-border-bottom": "1px solid #0000ff",
          "--0h-border-left": "1px solid #0000ff"
        },
        "animation-2": {
          "--0h2-color": "#ffffff",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "#ffffff",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu nền",
          "var": "--0h-background-color",
          "type": "background-color"
        },
        {
          "label": "Viền trên",
          "var": "--0h-border-top",
          "type": "border"
        },
        {
          "label": "Viền dưới",
          "var": "--0h-border-bottom",
          "type": "border"
        },
        {
          "label": "Viền trái",
          "var": "--0h-border-left",
          "type": "border"
        },
        {
          "label": "Viền phải",
          "var": "--0h-border-right",
          "type": "border"
        },
        {
          "label": "Bo góc",
          "var": "--0h-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Màu chữ",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0h-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-background-color animation-0-hover-border-radius animation-0-hover-border-top animation-0-hover-border-right animation-0-hover-border-bottom animation-0-hover-border-left",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000083",
      "type": "1",
      "name": "doi_mau_chu_bieu_tuong_va_bo_goc",
      "animation": {
        "animation-0": {
          "--0-transition": "0.3s",
          "--0h-transition": "0.3s",
          "--0h-border-radius": "50px 50px 50px 50px"
        },
        "animation-2": {
          "--0h2-color": "green",
          "--0h2-transition": "var(--0h-transition)",
          "--2-transition": "var(--0-transition)"
        },
        "animation-4": {
          "--0h4-color": "green",
          "--0h4-transition": "var(--0h-transition)",
          "--4-transition": "var(--0-transition)"
        }
      },
      "customize": [
        {
          "label": "Màu văn bản",
          "var": "--0h2-color",
          "type": "color"
        },
        {
          "label": "Màu biểu tượng",
          "var": "--0h4-color",
          "type": "color"
        },
        {
          "label": "Bo góc",
          "var": "--0h-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0h-transition",
          "type": "transition"
        }
      ],
      "override": {
        "animation-0": "animation-0-hover-border-radius",
        "animation-4": "animation-0-hover-animation-4-color"
      }
    },
    {
      "id": "000084",
      "type": "1",
      "name": "khung_vet_sang",
      "animation": {
        "animation-0": {
          "--0-position": "relative",

          "--0b-content": "",
          "--0b-position": "absolute",
          "--0b-opacity": "1",
          "--0b-top": "50%",
          "--0b-left": "50%",
          "--0b-width": "100%",
          "--0b-height": "100%",
          
          "--0hb-opacity": "0",
          "--0hb-position": "absolute",
          "--0hb-width": "var(--0b-width)",
          "--0hb-height": "var(--0b-height)",
          "--0hb-top": "var(--0b-top)",
          "--0hb-left": "var(--0b-left)",

          "--0b-transform": "translateX(-50%) translateY(-50%)",
          "--0hb-transform": "var(--0b-transform)",
          "--0b-z-index": "1",
          "--0hb-z-index": "var(--0b-z-index)",

          "--0hb-border-color-shared": "rgba(255,255,255,0.5)",
          "--0b-border-width-shared": "80px",
          "--0b-border-style-shared": "double",
          
          "--0b-border-top": "var(--0b-border-width-shared) var(--0b-border-style-shared) transparent",
          "--0b-border-left": "var(--0b-border-width-shared) var(--0b-border-style-shared) transparent",
          "--0b-border-right": "var(--0b-border-width-shared) var(--0b-border-style-shared) transparent",
          "--0b-border-bottom": "var(--0b-border-width-shared) var(--0b-border-style-shared) transparent",

          "--0hb-border-top": "0px var(--0b-border-style-shared) var(--0hb-border-color-shared)",
          "--0hb-border-left": "0px var(--0b-border-style-shared) var(--0hb-border-color-shared)",
          "--0hb-border-right": "0px var(--0b-border-style-shared) var(--0hb-border-color-shared)",
          "--0hb-border-bottom": "0px var(--0b-border-style-shared) var(--0hb-border-color-shared)",
          
          "--0b-border-radius": "0 0 0 0",
          "--0hb-border-radius": "var(--0b-border-radius)",
          "--0b-transition": "0.3s",
          "--0hb-transition": "0.3s"
        }
      },
      "customize": [
        {
          "label": "Độ dày của vệt sáng",
          "var": "--0b-border-width-shared",
          "type": "border-width"
        },
        {
          "label": "Kiểu của vệt sáng",
          "var": "--0b-border-style-shared",
          "type": "border-style"
        },
        {
          "label": "Màu của vệt sáng",
          "var": "--0hb-border-color-shared",
          "type": "border-color"
        },
        {
          "label": "Bo góc của khung vệt sáng",
          "var": "--0b-border-radius",
          "type": "border-radius"
        },
        {
          "label": "Lớp",
          "var": "--0b-z-index",
          "type": "z-index"
        },
        {
          "label": "Thời gian bắt đầu (s)",
          "var": "--0hb-transition",
          "type": "transition"
        },
        {
          "label": "Thời gian kết thúc (s)",
          "var": "--0b-transition",
          "type": "transition"
        }
      ]
    }
  ];

const result = processItems(items);
console.log(result);
console.log(resultArrayNames);
console.log(resultArrayAnimations);