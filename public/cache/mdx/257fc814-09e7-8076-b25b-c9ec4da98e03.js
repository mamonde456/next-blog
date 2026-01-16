"use strict";
const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.h1, {
      id: "challenge-1",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#challenge-1",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "challenge 1"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "2024.11 ~ 2024.12 까지 스터디를 수행하며, 좋았던 경험과 어려웠던 점을 블로그에 기록해본다."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "귤 스터디에 참가하고(2기), 11월에 1차 과제를 받았다. 당장 할 수 있는 상황은 아니라서 과제 내용만 훑어보았고, 수월하게 할 수 있다고 생각했다. (과제 수행 기간은 2주일이다)"
    }), "\n", _jsxs(_components.h2, {
      id: "요구사항",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#요구사항",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "요구사항"]
    }), "\n", _jsx(_components.p, {
      children: "요구사항에 대해 간략히 작성하자면, 아래와 같다."
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "버튼을 눌렀을 때, 메인 페이지의 상품 개수를 늘리거나 줄일 수 있어야함."
      }), "\n", _jsx(_components.li, {
        children: "상품 개수가 0에서 1로 늘어나면, 해당 품목은 카트에 담겨야함."
      }), "\n", _jsx(_components.li, {
        children: "카드 안의 상품과 메인 페이지의 상품 개수는 동기화되어야함."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "UI를 건드릴 필요는 없고 스크립트만 짜면 되는 과제이다."
      })
    }), "\n", _jsxs(_components.h2, {
      id: "해결방법-구상",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#해결방법-구상",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "해결방법 구상"]
    }), "\n", _jsx(_components.p, {
      children: "나는 이 문제를 메인 컴포넌트 위주로 생각했다. ProductCard 하위 컴포넌트를 사용하여 map을 통해 출력하고 있으니, ProductCard에서 상태를 만들어 컨트롤 하면, 각 컴포넌트 별로 상태가 존재하고 별도로 컨트롤이 가능하다고 생각했다."
    }), "\n", _jsx(_components.p, {
      children: "그러나 이 방법에는 문제가 있었는데, 동일한 ProductCard를 사용하는 Cart 모달이 있다는 것이다. 상태를 하위컴포넌트에서 컨트롤하게 되면 Cart 모달의 상태 또한 다른 곳과 맞춰줘야 했는데… 이게 제대로 작동하지 않고 1~2개씩 차이를 보였다."
    }), "\n", _jsx(_components.p, {
      children: "useEffect를 사용하여 setState를 했지만, setState 동작은 비동기로 이루어지고 값이 반영되는 것은 렌더링 이후이기 때문에 도중에 상태값이 변경되면 해당값은 반영되지 않는 문제가 있는 것 같았다."
    }), "\n", _jsxs(_components.h2, {
      id: "어려웠던-점-및-구현-내용",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#어려웠던-점-및-구현-내용",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "어려웠던 점 및 구현 내용"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "소요 시간: 대략 4시간"
      })
    }), "\n", _jsx(_components.p, {
      children: "요구사항을 지켜 구현한 시간은 대략 4시간이었다. 하루에 1~2시간씩 시간을 내어 구현했는데, 생각보다 어렵지는 않았다. 제일 어려웠던 점이라면, 카트(ProductCard) 컴포넌트와 메인 컴포넌트(App)의 상품 개수가 동기화되어야 한다는 점이다. 나는 이걸 전역 상태 도구 없이 구현하고자 했고, 동일한 컴포넌트를 사용하면서 별도로 각자의 상태를 가지고 있었기에 상태 동기화가 어려웠다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "처음에는 map() 메서드를 통해 product list를 출력하고 있어서, ProductCard 컴포넌트 내부에서 상태를 관리하고자 했습니다. 그러나 상태를 변경하는 이벤트가 cart에서도 일어나기 때문에 수량이 맞지 않는 오류가 발생했습니다. (cart 목록 또한 별도의 상태를 선언하여 양쪽의 상태가 변경될 때마다 서로 업데이트 해주고 있었음) - 나의 PR 설명 중에서"
        })
      }), "\n"]
    }), "\n", _jsx("u", {
      children: "결론적으로는 중앙에(App 컴포넌트) 상태를 만들고 ProductCard 컴포넌트에서는 이벤트를 동작하고 상태를 끌어올려 메인 동작들은 App 컴포넌트에서 관리하도록 했다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "App 컴포넌트에서 컴포넌트를 출력하고 있음."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "그러니 상태가 안맞는 오류는 사라졌다. 지금 다시 과제를 생각하니, 처음부터 상태를 중앙에 놓고 시작했더라면 고민할 필요도 없이 구현했을 것이다. 상태를 각자 놓고자 한 것은 상품 리스트가 여러가지였고 ProductCard 컴포넌트에 상태를 만든다면, 각 상품의 개수는 별도로 취급되기 때문이었다. 이렇게 시작한 코드가 잘못된 방향으로 흘러간 것 같다…"
    }), "\n", _jsxs(_components.h3, {
      id: "개선-방향",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#개선-방향",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "개선 방향"]
    }), "\n", _jsx(_components.p, {
      children: "코드를 개선해본다면, useState 대신 useReducer를 통해 코드가 하는 일을 명확히 분류할 수 있지 않을까 싶다. 그리고 App 컴포넌트에서 사용하는 기능들을 한 곳에 모아둘 수 있으니 좋을 거 같은데, useReducer를 사용하는 적절한 시기에 대해 아직 명확한 기준이 없어 그런 점은 우려가 된다."
    }), "\n", _jsxs(_components.h2, {
      id: "구현-이후의-일",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#구현-이후의-일",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "구현 이후의 일"]
    }), "\n", _jsx(_components.p, {
      children: "그래도 다른 사람의 코드를 리뷰하고, 리뷰 받는 일은 즐거웠다. 특히, 이번 과제에서 다른 사람의 코드를 리뷰하며, 이벤트 허브라는 구조에 대해 알게 되었다. 리렌더링 발생을 최소화 하기 위해 사용했다고 말씀해주셨는데, Vue의 이벤트 버스 같았다. 실제로 이벤트 허브를 조사해보니 둘은 유사하지만 종속성이 Vue에 있는지, 아니면 범용적으로 사용이 가능한지의 차이 정도."
    }), "\n", _jsx(_components.p, {
      children: "과제를 모두 리뷰하고 조원들끼리 디스코드에서 보이스로 말하며 회고를 가졌고, 과제를 수행할 때 어려웠던 점, 느낀 점 등을 나누었다. 또, 과제에 대한 내용뿐만 아니라 학습은 어떻게 하고 있는지, 있다면 어떤 방법으로 하는지, 면접에서 이런 질문을 받았는데 어떤 식으로 대답해야 할 지, 성능 측정은 어떤 식으로 하는 지 등 다양한 주제로 대화를 나누었다. 나 말고 다른 사람의 생각을 들어볼 수 있다는 건 굉장히 즐거웠는데… 대화 질문의 8할은 내가 한 거라 양심이 찔렸었다… 이후로는 챌린지 2에 참여해야겠다고 생각하면서 챌린지 2에서도 같은 조원을 만났으면 좋겠다고 생각했는데… 만나지는 못했다. 여기까지 과제 회고 요약을 마친다."
    }), "\n", _jsxs(_components.h2, {
      id: "-작동-화면",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#-작동-화면",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "★ 작동 화면"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/3a760938-607a-415e-a7c7-7efdd3b73b12/Feb-04-2025_16-02-20.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPJBXSQ%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCpYJWQgtsSZcmEiuBQtAaHw7vSMpw0tCFT9uyh03HOnAIge6mLukYln2987rPsU13y8u0XmS56tSehl%2B%2BE4E6IUswq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO7PMZ7TKnW54HR2YyrcA4Fw%2Bvw5WGmDaM3iZR40Haz%2FTGHZDpjf%2FqNpPVOb9QCo1ln6dJn0SLwl9Eu3XfSdh%2Bp7UxdsVIXCxlWXVm7XkYq6c%2BcjnlLGkTEVslSA06rVvcbP6e7DEDKRJZefnnb5Ohp%2BIEvVa%2FQtyAX7ks4UuAfK%2FG3gPE%2Ft7YqpcNWRomC%2Blz6py7aQ%2B8bbydQvARHyjw4KngSHPswWIPcaVzinL7v7uMQllgYiuWG%2FTr8HuENp1KCvvwEMlQTkEsnX6itskBQDMdaRFqyjzpRlaHZcmN4LzAPz8yeB6ryIXpJTi4x61PxoVee3LeefYDrX8kdi2oPscgSUxTiNhFF4QPDTHlH9eDVV8%2FVJg%2FzAq1yiPLL5%2BzEDCDzlzSAfCc4fws6hpVxH88yvHEco9Fv3x1OQ3%2FsnFezfoqPtrbKTfgWbSmiKGptsdtiAympI9UM1oUHRNy2BDcjfW5sbnG2uYnMsiNfLRJkXe0kA%2FEXzp1mQ7M88zB3lVOEMEInj5btjqINPyqJM6e1eEUJCIAqu32GxI5cFvbFGNl%2FTPRkRF3Pzomfa4xdq%2FUXhU%2BQtDZDcvSpr%2F%2F8C2AvnLE1wvzN%2FGnIlKT9U0LT4r3brDCAjbtzsu0usfA2dFRno4Zes9xT8MKGYpssGOqUBQhSlDLSrYy%2BO9ypPs9d7KRRRJHOAYTy827mGmmVujslvWT1YXMAdlxsIf3bOFvj9qgbDqA%2BipzzSTxFHtCINfhr9AxuXbrdjPT1Qu3H98pQ9TJTmglhpcNgY%2B3Z7vGtbpwBuzDyQ7PCvwBoMW9tesz3myjO5BRsGcALv2du%2BVnNtTOyYfQ6STrgJ9aBG9M7nE0EAdEHfeeGW2rs%2B0j%2BkwYTKmIa%2F&X-Amz-Signature=446572b1bece257ecbcf8ca21d8d4123f3d22417f66d39e07a916d2422cf1bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "Feb-04-2025_16-02-20.gif"
      })
    }), "\n", _jsxs(_components.h2, {
      id: "-구현-내역",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#-구현-내역",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "★ 구현 내역"]
    }), "\n", _jsxs(_components.h3, {
      id: "filteringproduct",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#filteringproduct",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "filteringProduct"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " initializeProducts"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "items"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Product"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[]) "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  items."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "map"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "item, count: "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " App"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "filteringProduct"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setFilteringProduct"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    initializeProducts"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "PRODUCTS"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ..."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{filteringProduct."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "map"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "product"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "   <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "ProductCard"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "\t\t product"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "product"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "     key"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "product.id"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "     onUpdate"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "handleUpdate"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "   />"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "))}"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "PRODUCTS"
      }), " 데이터가 들어온다. 해당 데이터는 상품 리스트이지만 내부에 개수를 계산해줄 항목이 존재하지 않는다. 그래서 초기 계산으로 map 메서드를 통해 count 항목을 추가하여 반환해주었다. 단순히, count를 추가하는 로직이라 리액트 컴포넌트 외부에서 선언해주었다. 또한 배열을 계산하고 있기에 (현재는 많은 데이터가 넘어오지는 않지만) useState 초기값으로 함수를 전달하여 지연초기화를 사용했다. 컴포넌트가 마운트 되어 있는 동안 데이터가 바뀔 일이 없어, 한 번만 계산해주면 되기 때문에 지연초기화를 선택했다."]
    }), "\n", _jsxs(_components.h3, {
      id: "cart",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#cart",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Cart"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " carts"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useMemo"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " filteringProduct."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "filter"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " item.count "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "),"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    [filteringProduct]"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "cart에 담긴 물품의 개수와 메인 페이지의 상품 개수가 동일해야 한다. 별도의 상태로 관리해준다면, 둘을 동기화 하는 작업이 어려울 것이다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "🚨 실제로 상태를 다르게 잡고 코드를 작성했다가 동작 과정에서 1~2개의 차이가 생겼다. 리액트에서 useState는 비동기로 작동하기 때문에 useEffect를 통해 종속성을 추가하여 작업하여도 완벽하게 일치하지는 않더라"
        })
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "useMemo의 종속성에 filteringProduct를 넣어야 요구사항대로 작동한다. 컴포넌트가 마운트되고 useMemo가 계산할 상황에서는 상품의 개수가 0이기 때문이다. 또 이후의 일을 추적하지 않으므로(product의 개수가 변경되더라도) 메인 페이지에서 개수를 늘린다 하더라도 카트에 물품이 담기지 않는다."
    }), "\n", _jsxs(_components.h3, {
      id: "handleupdate",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#handleupdate",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "handleUpdate"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleUpdate"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "product"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " ProductType"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    setFilteringProduct"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "prev"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " mergeIntoArray"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(prev, product));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  };"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "cart 목록을 보여줄 화면 컴포넌트와 메인 상품 리스트 컴포넌트는 동일한 컴포넌트를 재사용한다."
    }), "\n", _jsx(_components.p, {
      children: "그렇기 때문에 handleUpdate 함수 하나로 메인 상품의 개수 추가와 카트 상품의 개수 추가를 구현할 수 있다. 상태는 하나로 관리하기 때문에 서로의 개수가 동일하다."
    }), "\n", _jsxs(_components.h2, {
      id: "-구현-목적",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#-구현-목적",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "★ 구현 목적"]
    }), "\n", _jsx(_components.p, {
      children: "전역 상태 관리 도구를 사용하면 쉽게 구현할 수 있는 내용이다. 그렇지만 전역 상태 도구를 사용하지 않고도 구현해보고자 했다. 전역 상태 관리 도구를 사용하기에는 프로젝트가 작았기 때문이다. 또 외부 라이브러리를 사용하는 것보다 리액트에서 제공하는 context API를 이용하는 편이 더 나았을 거 같다. 어쨌든 전역 상태 관리 도구를 사용하지 않는 것이 궁극적인 목표였기 때문에 함수와 useMemo, useState(적은 개수의 상태), useEffect를 통해 해결해보았다."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
return {
  default: MDXContent
};
