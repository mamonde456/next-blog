"use strict";
const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    del: "del",
    em: "em",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.h1, {
      id: "challenge-2",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#challenge-2",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "challenge 2"]
    }), "\n", _jsx(_components.p, {
      children: "귤 스터디 2차 과제를 받았다. 기한은 2주일 내로 과제를 완성하고, 1주일 동안 서로의 과제를 리뷰하는 것이다. 사정이 있어서 첫주는 과제를 하지 못했다. 남은 기한은 일주일이기 때문에 매일 1~2시간씩 과제를 했다. 생각보다 어려운 과제는 아니었지만, 그래도 이런저런 고민을 해서 대략 6시간정도 걸린 것 같다."
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
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Autocomplete 구현"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "input을 클릭하면 dropdown이 펼쳐짐"
      }), "\n", _jsx(_components.li, {
        children: "마우스가 올라가 있는 아이템은 하이라이트"
      }), "\n", _jsx(_components.li, {
        children: "검색어를 입력하면 대소문자 상관없이 매칭되는 아이템만 추려짐"
      }), "\n", _jsx(_components.li, {
        children: "특정 아이템을 클릭하면 콘솔에 로그로 남음"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "추가스펙"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "esc 키로 dropdown 닫기"
      }), "\n", _jsx(_components.li, {
        children: "바깥 영역 클릭하여 dropdown 닫기"
      }), "\n", _jsxs(_components.li, {
        children: ["마우스와 ↑ ↓ 커서 이어가기", "\n", _jsxs(_components.ol, {
          children: ["\n", _jsx(_components.li, {
            children: "검색어를 입력하고 바로 ↑ ↓ 커서로 이동할 수 있습니다."
          }), "\n", _jsx(_components.li, {
            children: "마우스로 특정 아이템이 하이라이트 된 상태에서, ↑ ↓ 커서를 누르면 그 위치에 이어서 위 아래로 하이라이트가 이동합니다."
          }), "\n", _jsx(_components.li, {
            children: "엔터키를 누르면 마우스로 하이라이트 했든 ↑ ↓ 커서로 하이라이트 했든 상관 없이, 하이라이트 된 아이템이 선택됩니다."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "UI를 건드릴 필요는 없고 스크립트만 짜면 되는 과제이다."
      })
    }), "\n", _jsxs(_components.h2, {
      id: "어려웠던-점-및-구현-내용-설명",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#어려웠던-점-및-구현-내용-설명",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "어려웠던 점 및 구현 내용 설명"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "소요 시간: 대략 6시간"
      })
    }), "\n", _jsx(_components.p, {
      children: "자동완성 기능에서 검색한 항목을 리스트에서 어떻게 찾을까 고민했다. 모든 항목을 순회하면 시간이 너무 걸리고, 이런 부분에서 어떤 방법을 사용할 수 있을지 찾아보았다. 처음에는 Trie(트라이) 구조로 데이터 구조를 바꾸어 사용해볼까 싶었는데, 그러려면 배열을 Map 구조에 맞춰 변경해야 하므로 일이 커지더라. 데이터로 주어지는 배열은 사전 정렬되어 있고, 변동이 없다. 그래서 이진검색을 사용하여 배열을 순회하기로 결정했다."
    }), "\n", _jsx(_components.p, {
      children: "기본 스펙을 구현하기까지는 대략 1시간 30분이 걸렸다. 추가 스펙 구현과 오류 수정에서 남은 시간을 사용했는데, 요구사항에는 없지만 디바운스 처리도 함께 해주었다. 콜백 함수로 넘기면서 제대로 작동하지 않아 수정하는 데 삽질을 했지만…"
    }), "\n", _jsx(_components.p, {
      children: "처음에는 useState를 통해 상태관리를 하고 있었지만, useState가 많은 건 좋지 않다고 생각했다. 또, 컴포넌트에서 사용하는 연관된 기능들을 useReducer로 묶어 관리하는 것이 좋다고 느꼈기에 후반부에는 useReducer로 변경했다."
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
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/2c2029b0-7181-458e-99a8-688f1b9e1775/Jan-24-2025_15-14-45.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466733NXECZ%2F20260221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260221T012747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZutzKQOh3cX6mp5HZ7YHmaA0YMMtyR2aYMKC9hqMMHAiEAwqk4Uimy7j8HfA0w7SsYPGx5BkuFLW5BTDkgRXxMvAwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhZ80cb2rBUdX%2FjgircAxLYGyEPpbiyrYrf26syf8i0LgwUDyEZu9ki4t8BJmrhUGnRD8PUfqB3pV2P0sT35zf5OnvaTcUEhpNcTc7jSIIMg%2Bbjg0g7gngDb6LxM5VeJCh%2BQ5K0bxOIFZk4WoebEza%2BNcHhrukBcR72PHByK00n0PYbsFHRYgR2zEfO0%2BKDlw9epNykXlBBVRXgnJ8rSU95PerrYTNDLzXlG8KepeJjkL0zKmHU7ullMy9RUZKpSWsYg7ml6kqTViHl8VnR0p%2Bvk3YKJxlo1gE%2BRuSlr5CDZikb2jyN8Uz%2BOHvljZfZxp8U8N%2Bgpl7geFz55DJZqNZHDdVcd3mudB%2B1%2FnrsdlD4v2MuynxkkFgr2leHTMHN9iAsDcfUF61L5buPvDQyAokC8tTicaavJsUjhFXlSUK1t5LcfBnHXO21IOn1wGMldJsifdhBn1GzCNn23%2BNZxTT1YNOOKYqd6yoPaebJmySDX27Yqhwhh7qt%2FmDLSb5bEDDoZvLtZddACbNJtehOqSlLb2QZJdEA7I%2Fc79q4HVo40lICr%2BltJ%2F8vvaUOH%2BPNcXlWYJQKjw6vTKn9sBcFf3YbRo9kRzorykSNPrtRDB4jkwUlPRrnM1xV7%2BdEbgQH2lFr%2BUM0qfPxJnumMOu%2F48wGOqUBNbfDD09T3D62HLitzJdj8BNW0WXFXc9gYDIX54Pr3eyVm7igYWaW1SIo9W4fxTGrk%2F7UCh%2B1NPjB6zPZhgyAErm1RUbdvvGbk7lvFilvYA2oOERKfXmNCwI9fITZNSdiIL7UtC3lWjLEiL%2Bjtpz%2BFgDbog1YTuzH%2FGCFYE7lVv4eNA5y5VZkANfOuChXHtvURPgR4TfCjx314yI4GUatB39zFXi5&X-Amz-Signature=5083f0a37135bbe723747501b5f699f3dae1752e0cab39a32f6af77739f9f94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "Jan-24-2025_15-14-45.gif"
      })
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
      children: "효율적인 코드를 작성하고자 했다. 상황에 맞는 방법을 찾고 싶었고, 나름대로 내 기준에서는 괜찮다고 생각했다.(당시에는) 또, 요구사항에는 적혀있지 않았으나 예외 케이스에 대해 생각해보며 실제로 화면 테스트를 진행했고, 임의로 수정했다. 지금 다시 생각한다면, 이진검색도 좋지만, 정규식을 이용해 검색하는 것이 더 효율적이지 않았을까 싶다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "예외 케이스라고 하면, 항목을 클릭한 뒤, 드롭다운을 닫으면 hover는 그대로 유지되는지 아니면 초기화 되는지 등에 관한 것들이다."
      }), "\n"]
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
      id: "관련-코드",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#관련-코드",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "관련 코드"]
    }), "\n", _jsx(_components.p, {
      children: "관련된 전체 코드이다."
    }), "\n", _jsx(_components.p, {
      children: "과제에 대한 코드는 유출하면 안되기 때문에 내가 작성한 코드만 가져왔다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// components/Autocomplete.tsx"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
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
              children: " init"
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
              children: "source"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[])"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
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
                color: "#F47067"
              },
              children: "  return"
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
                color: "#ADBAC7"
              },
              children: "    hoverIndex: "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    searchAutoArray: "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "keywordBinarySearch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(source, "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "''"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "),"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    isVisible: "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
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
                color: "#F69D50"
              },
              children: "  hoverIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " number"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "  searchAutoArray"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[];"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "  isVisible"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Action"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'SET_SEARCH_ARRAY'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "payload"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[] }"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  |"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'SET_HOVER_INDEX'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "payload"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " number"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  |"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'TOGGLE_VISIBLITY'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "payload"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  |"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ENTER'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "callback"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
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
                color: "#6CB6FF"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  |"
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
                color: "#F69D50"
              },
              children: "      type"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ESCAPE'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "      ref"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " RefObject"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "HTMLInputElement"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "      payload"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[];"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  |"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ARROWUP'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  |"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ARROWDOWN'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " };"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
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
              children: " reducer"
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
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "action"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Action"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
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
                color: "#F47067"
              },
              children: "  switch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (action.type) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'SET_SEARCH_ARRAY'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " newArray"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " action.payload;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, searchAutoArray: newArray };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'SET_HOVER_INDEX'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, hoverIndex: action.payload };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'TOGGLE_VISIBLITY'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, isVisible: action.payload };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ENTER'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " index"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state.hoverIndex;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      action."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "callback"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state.searchAutoArray[index]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ESCAPE'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "      resetInputRef"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(action.ref);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
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
                color: "#ADBAC7"
              },
              children: "        isVisible: "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        hoverIndex: "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        searchAutoArray: "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "keywordBinarySearch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(action.payload, "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "''"
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
              children: "      };"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ARROWUP'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " arrowUpIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "max"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state.hoverIndex "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, hoverIndex: arrowUpIndex };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ARROWDOWN'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " lastLength"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state.searchAutoArray."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " arrowDownIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "min"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state.hoverIndex "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", lastLength);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, hoverIndex: arrowDownIndex };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    default"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 리액트 컴포넌트 밖"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " App"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () {"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " "
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "dispatch"
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
              children: " useReducer"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(reducer, source, init);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// util/index.ts"
            })
          }), "\n", _jsxs(_components.span, {
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
              children: " capitalizeFirstChar"
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
              children: "array"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
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
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " array."
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
              children: "el"
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
              children: " ({"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    ..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "el,"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    label: el.label["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "toUpperCase"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " el.label."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
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
              children: "  }));"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
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
              children: " const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " keywordBinarySearch"
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
              children: "array"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[], "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "keyword"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " string"
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
                color: "#F47067"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " left "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " array."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
                color: "#6CB6FF"
              },
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " [];"
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
                color: "#6CB6FF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " stringToLower"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(array);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  while"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (left "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "floor"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "((left "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right) "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (data[mid].label."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "startsWith"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(keyword)) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      while"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (i "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " &&"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " data[i].label."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "startsWith"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(keyword)) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        result."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "unshift"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(data[i]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        i"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "--"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      i "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      while"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (i "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " data[i].label."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "startsWith"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(keyword)) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        result."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "push"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(data[i]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        i"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "++"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      break"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "else"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (data[mid].label "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " keyword) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      left "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "else"
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
                color: "#ADBAC7"
              },
              children: "      right "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " capitalizeFirstChar"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(result);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "지연-초기화-usereducer",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#지연-초기화-usereducer",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "지연 초기화: useReducer"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "dispatch"
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
              children: " useReducer"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(reducer, "
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "source"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "init"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useReducer에서의 지연 초기화 활용"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 3번째 인자(함수)가 2번째 인자(state)를 매개변수로 받아 함수를 실행"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setState"
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
              children: "(()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " init)"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useState에서의 지연 초기화 활용"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 함수를 초기값으로 넘겨준다."
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "useState를 통해 지연 초기화를 사용했다. 배열 구조의 데이터(source)가 들어오고, hoverIndex, isVisible 을 추가한 새로운 데이터 구조를 반환해야하는 큰 작업이기에 지연 초기화를 사용했다. (배열을 사용한 연산)"
    }), "\n", _jsx(_components.p, {
      children: "useState가 많아지는 것은 좋지 않다 배웠으며, hoverIndex, isVisible, array가 검색에 해당하는 상태라서 이를 모으기 위해 useReducer로 결합시켰다. useState에서 사용했던 지연 초기화가 useReducer에서도 가능할지 검색해봤다."
    }), "\n", _jsx(_components.p, {
      children: "공식 문서에서 찾아보니 useReducer도 지연초기화가 가능했다. 3번째 인자를 함수로 전달하고 함수에서 사용하는 매개변수를 2번째 인자에 전달하면 된다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " reducer"
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
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "action"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Action"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
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
                color: "#F47067"
              },
              children: "  switch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (action.type) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'SET_SEARCH_ARRAY'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " newArray"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " action.payload;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, searchAutoArray: newArray };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'SET_HOVER_INDEX'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, hoverIndex: action.payload };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'TOGGLE_VISIBLITY'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, isVisible: action.payload };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ENTER'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " index"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state.hoverIndex;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      action."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "callback"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state.searchAutoArray[index]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ESCAPE'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "      resetInputRef"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(action.ref);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
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
                color: "#ADBAC7"
              },
              children: "        isVisible: "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        hoverIndex: "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        searchAutoArray: "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "keywordBinarySearch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(action.payload, "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "''"
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
              children: "      };"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ARROWUP'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " arrowUpIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "max"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state.hoverIndex "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, hoverIndex: arrowUpIndex };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    case"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'KEYDOWN_ARROWDOWN'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " lastLength"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state.searchAutoArray."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " arrowDownIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "min"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state.hoverIndex "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", lastLength);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "state, hoverIndex: arrowDownIndex };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    default"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "switch 구문을 사용해서 한눈에 알아볼 수는 있지만, 케이스가 많아지니 조금 어지럽게 느껴진다. 이걸 전부 모아서 사용해야 할까? 싶은 고민이 생기고, 객체 리터럴로 바꿀 수 있나? 각자 함수로 분리해서 사용하는 건 어떨까 싶다. 조건을 비교하는 구문이 문자열이기 때문에 객체 리터럴로 변경하는 걸로 개선할 수 있을 듯 하다."
    }), "\n", _jsx(_components.p, {
      children: "지금은 useReducer에 모든 걸 모아두고 있지만, key 이벤트, 배열에 관한 기능을 분리하는 것도 좋아보인다."
    }), "\n", _jsxs(_components.h3, {
      id: "이진검색",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#이진검색",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "이진검색"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// util/index.ts"
            })
          }), "\n", _jsxs(_components.span, {
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
              children: " capitalizeFirstChar"
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
              children: "array"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
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
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " array."
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
              children: "el"
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
              children: " ({"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    ..."
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "el,"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    label: el.label["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "toUpperCase"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " el.label."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
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
              children: "  }));"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
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
              children: " const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " keywordBinarySearch"
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
              children: "array"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[], "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "keyword"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " string"
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
                color: "#F47067"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " left "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " array."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
                color: "#6CB6FF"
              },
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " [];"
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
                color: "#6CB6FF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " stringToLower"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(array);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  while"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (left "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "floor"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "((left "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right) "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (data[mid].label."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "startsWith"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(keyword)) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      while"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (i "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " &&"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " data[i].label."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "startsWith"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(keyword)) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        result."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "unshift"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(data[i]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        i"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "--"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      i "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      while"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (i "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " data[i].label."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "startsWith"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(keyword)) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        result."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "push"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(data[i]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        i"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "++"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      break"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "else"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (data[mid].label "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " keyword) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      left "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "else"
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
                color: "#ADBAC7"
              },
              children: "      right "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " mid "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " capitalizeFirstChar"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(result);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "검색 알고리즘으로 이진검색을 선택했다. 들어오는 데이터가 변함없고, 정렬되어 있었기 때문에 선택했으나, 지금 다시 생각해보니 차라리 정규식을 활용한 검색 방법이 나았을 것 같다. 이진검색은 사전정렬이 필수적이기 때문이다. 위의 코드에는 정렬 로직은 들어있지 않다."
    }), "\n", _jsx(_components.p, {
      children: "또한, 자동완성 기능을 위해 넣은 기능치고는 과한 느낌이 강했다. 차라리 정규식을 사용하는 쪽이 작성할 코드도 적었을 것이고 간단했을 것 같다는 생각이 든다. 혹은 아예 데이터 구조를 Map으로 바꾸어 트라이 구조를 활용해볼 수도 있을 것 같다. 공통 접두사를 가지고 있는 항목을 쉽게 탐색할 수 있을 것 같다."
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.del, {
        children: "물론, 학습이 필요하겠지만."
      })
    }), "\n", _jsxs(_components.h3, {
      id: "hoverindex",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#hoverindex",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "hoverIndex"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "searchAutoArray"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setsearchAutoArray"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " init)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "hoverIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setHoverIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " init)"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setsearchAutoArray"
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
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " lastLength"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " prev."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " arrowDownIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "min"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(hoverIndex "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", lastLength);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\tsetHoverIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(arrowDownIndex)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\treturn"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " prev"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "배열의 최신 상태가 필요했다. 배열의 개수를 가지고 hover의 최대 index, 최소 index를 계산해야하기 때문이다. 또, 검색을 하고 나온 결과에 따라 index의 최대/최소 개수가 달라져야 한다. 따라서 최신 상태가 중요한데, useState로 setState를 한다고 해도 다음 렌더링에서 적용되기 때문에, 현재 상태(state)는 최신 상태가 될 수 없었다."
    }), "\n", _jsx(_components.p, {
      children: "예전에 useState를 공부하며, setState((prev)) 는 항상 최신 상태를 가리킨다고 배웠었다. 이걸 떠올리며, setState를 통해 최신 상태를 사용하고 prev만 반환했다."
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.del, {
        children: "지금 보면 괜찮은 코드인지는 모르겠으나 좋지 않은 것 같다…"
      })
    }), "\n", _jsx(_components.p, {
      children: "그걸 useRedcuer로 바꾸면서, reducer에 들어오는 최신 state를 반영할 수 있게 되었다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "useEffect를 가급적 사용하지 않는 방향으로 가고 싶었고, useEffect의 종속성에 배열을 추가한다 해도 다시 setState를 해줘야 하기 때문에… useState는 비동기니까 또 결과값에 차이가 생기고… 최신 상태를 추적할 수 없는 문제가 생겼다."
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "-트러블슈팅",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#-트러블슈팅",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "★ 트러블슈팅"]
    }), "\n", _jsxs(_components.h3, {
      id: "-이슈-arrowup-입력-시-hoverindex가-두-번-실행되는-이유",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#-이슈-arrowup-입력-시-hoverindex가-두-번-실행되는-이유",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🔍 ", _jsx(_components.strong, {
        children: "이슈:"
      }), " ", _jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "ArrowUp"
        })
      }), " ", _jsx(_components.strong, {
        children: "입력 시"
      }), " **", _jsx(_components.code, {
        children: "hoverIndex"
      }), "**", _jsx(_components.strong, {
        children: "가 두 번 실행되는 이유"
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["요구사항을 구현하면서 동작하는 것에 집중하며 코드를 작성하다보니 에러가 생겼다. ", _jsx("u", {
        children: "up 방향키를 누를 때, hoverIndex가 +1씩 증가해야 하는데, +2씩 증가는 이슈였다."
      })]
    }), "\n", _jsx(_components.p, {
      children: "추측하기로는 useEffect가 두 번 실행되면서 +2가 되는 게 아닐까? 생각하며, 엄격 모드를 해지했다. 그럼에도 이슈는 해결되지 않았고, useEffect 코드를 살펴보았다."
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "arrowDown에는 발생하지 않는다."
      }), "\n", _jsx(_components.li, {
        children: "arrowUp에만 발생하며 +2씩 증가한다."
      }), "\n"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setHoverIndex"
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
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "max"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(prev "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// arrowUp 일 시 실행"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "그렇다고, up 방향키를 누를 때 실행하는 로직이 잘못된 것도 아니었다. 그렇다면, useEffect를 살펴볼 수밖에 없었다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 당시 코드"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useEffect"
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
                color: "#ADBAC7"
              },
              children: "    window."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'keydown'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", handleKeydown);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [searchAutoArray]);"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "나중에 다시 보니 무엇이 문제인지 확실히 눈에 들어왔다. 이벤트를 걸어놓고, 클린업 함수를 통해 이벤트 등록을 해지하지 않은 것이다. 그러니 중복 이벤트가 발생하여 +2씩 증가하고 있던 것이었다."
    }), "\n", _jsx(_components.p, {
      children: "그렇다면 왜 arrowDown에서는 발생하지 않았을까?"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (searchAutoArray."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " >"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "     setHoverIndex"
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
                color: "#ADBAC7"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "min"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(prev "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", searchAutoArray."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "   }"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["if문의 조건에 걸렸을 것 같다. ", _jsx(_components.code, {
        children: "searchAutoArray.length > 0"
      }), " 때문에 실행되지 않은 건 아닐까?"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "useEffect에 클린업 함수를 작성해주니 중복 실행없이 제대로 동작하는 걸 볼 수 있었다."
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "처음에는 이슈의 해결방법을 한참 찾다가 코드를 분리하면서, 해결되어버렸다. 리팩토링 하며, useEffect의 클린업 함수에 이벤트 해지를 제대로 넣은 것이다. 과제를 종료하고, 해당 이슈의 문제를 알고 싶어 커밋을 검색해서 살펴보았다. 그랬더니 클린업 함수를 넣지 않았다는 걸 알게 되었다."
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.del, {
          children: "클린업 함수를 꼭 챙기자. 이번에 새로 공부하고 있는 영역이니 공부를 끝마치고나서는 잊지 않을 것 같다."
        })
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "-느낀-점",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#-느낀-점",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "★ 느낀 점"]
    }), "\n", _jsxs(_components.p, {
      children: ["당시에 생각할 수 있었던 최선을 다해 코드를 작성했다. 성능적인 면에서나 다양한 관점에서 챙기고 싶은 게 많았지만, 디바운스 처리와 이진검색 학습, 트러블슈팅 등 코드 작성이 더뎌졌기에 전부 챙길 수 없었다. 화면을 테스트하며 예외 케이스에 대해 임의로 작성해 넣어두었다. 과제를 리팩토링 하며 제일 어려웠던 점은 useEffect 사용을 최소화했다는 점이다. useEffect의 의존성을 활용했다면, 더 쉽게 처리할 수도 있었겠지만, useEffect의 과한 사용이 좋지 않다는 점을 떠올리며, 최소로 줄여보았다. ", _jsx(_components.del, {
        children: "근데 지금 생각하면 굳이 이렇게 안하고 1~2개 정도는 사용해도 좋을 것 같다."
      })]
    }), "\n", _jsx(_components.p, {
      children: "코드를 작성할 때, 어떤 것이든 적절하고 적당하게 사용하는 것이 좋지만, 기준을 찾는 것이 제일 어렵다…"
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
