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
    ];

const result = processItems(items);
console.log(result);
console.log(resultArrayNames);
console.log(resultArrayAnimations);
