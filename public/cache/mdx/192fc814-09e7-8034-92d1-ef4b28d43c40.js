"use strict";
const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    del: "del",
    em: "em",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
      id: "학습-배경",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#학습-배경",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "학습 배경"]
    }), "\n", _jsxs(_components.p, {
      children: ["나는 리액트 이벤트에 ", _jsx(_components.code, {
        children: "onClick={...}"
      }), " ", _jsx(_components.code, {
        children: "()=> fn()"
      }), " 인라인 익명 콜백 함수를 사용한다. 이렇게 사용하는 이유는 map을 이용해 배열을 순회하여 item을 ", _jsx(_components.code, {
        children: "fn()"
      }), " 함수로 넘겨줄 때 ", _jsx(_components.code, {
        children: "onClick={fn(item)}"
      }), " 으로 사용할 수 없기 때문이다. ", _jsx(_components.code, {
        children: "onClick={fn(item)}"
      }), " 를 사용하게 되면 ", _jsx(_components.code, {
        children: "fn()"
      }), " 함수가 바로 실행되어 기대했던 상황이 아닌 디버깅부터 시작해야 한다…"]
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
                color: "#ADBAC7"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{()=> "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 위처럼 사용!"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// map으로 출력하는 item 매개변수를 받기 위해서 ()=> 익명 함수를 열고 "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// handleClick(item) 콜백함수로 변수를 받는다."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 바로 실행됨!"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// handleClick() 콜백 함수를 호출하는 ()가 있어서 바로 실행됨."
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "그러던 도중, 과제를 수행하다가 PR에 조원분이 리뷰하며 쓴 글을 보게 되었다. 익명 함수가 메모리를 더 잡아먹기에 좋지 않다는 걸 배웠다는 내용이었다. 정말 그런가? 콜백함수를 이벤트에 바인딩 할 때 그런 것까지 신경써본 적이 없었다. 궁금한 찰나에 직접 조사해보기로 결심하고 해당 글을 써봤다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "틀린 내용이 있을 수도 있고, 시간이 지나 생각이 바뀔 수도 있지만 내가 조사하며 추론한 결과는 아래와 같았다…!"
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "학습-및-조사-전-결과-예상",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#학습-및-조사-전-결과-예상",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "학습 및 조사 전 결과 예상"]
    }), "\n", _jsx(_components.p, {
      children: "인라인 익명 함수가 가장 많은 메모리를 사용할 것 같다. 그리고 고차 함수, 인라인 콜백 함수, 일반적인 콜백 함수 순으로 메모리를 사용하지 않을까?"
    }), "\n", _jsx(_components.p, {
      children: "익명 함수는 리렌더링 마다 함수 객체를 새롭게 만들어 실행하기 때문에 가장 많을 것이다. 고차 함수 또한, 중간에 익명 함수가 포함되어 있으니 마찬가지로 내부 함수는 새로운 함수 객체를 생성하여 메모리를 잡아 먹을 것이다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "익명 함수 > 고차 함수 > 익명 콜백 함수 > 콜백 함수"
        })
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "그렇다면, 내 추측이 맞는지 확인해보러 가자. 아래의 내용은 어디까지나 리액트 환경에서 조사해본 것이다. 리액트를 사용하지 않는 순수 자바스크립트 환경에서는 다를 수 있다."
      })
    }), "\n", _jsxs(_components.h1, {
      id: "onclick--fn-같은-방식이-onclickfn-보다-메모리를-더-사용하게-되는-이유",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#onclick--fn-같은-방식이-onclickfn-보다-메모리를-더-사용하게-되는-이유",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), _jsx(_components.code, {
        children: "onClick={() => fn()}"
      }), " 같은 방식이 ", _jsx(_components.code, {
        children: "onClick={fn}"
      }), " 보다 메모리를 더 사용하게 되는 이유"]
    }), "\n", _jsx(_components.p, {
      children: "제목에서 알 수 있듯이, 일반적인 콜백 함수보다 익명 콜백 함수가 메모리를 더 사용한다. 그 이유가 뭘까?"
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
                color: "#ADBAC7"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{() => "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "fn"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 본 게시글에서는 위와 같은 사용법을 인라인 익명 콜백 함수라 부를 예정이다."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 정확히 어떤 명칭을 써야하는지 모르겠음."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{fn}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 위의 함수 사용은 일반적인 콜백 함수라 지칭하겠다."
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "이유를 살펴보면, 리액트에서 동작하는 과정과 연관이 있는데, 컴포넌트가 (리)렌더링 될 때마다 새로운 함수 객체를 생성한다. 리액트에서는 익명함수를 같은 객체라고 판단하지 않기 때문에 매번 (리)렌더링 때마다 새롭게 선언되고 연산하기 때문에 메모리가 낭비된다."
    }), "\n", _jsxs(_components.h2, {
      id: "렌더링마다-함수-객체를-생성하나요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#렌더링마다-함수-객체를-생성하나요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "렌더링마다 함수 객체를 생성하나요?"]
    }), "\n", _jsxs(_components.h2, {
      id: "-onclickhandleclick",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#-onclickhandleclick",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🚀 ", _jsx(_components.code, {
        children: "onClick={handleClick}"
      })]
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " MyComponent"
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
              children: "  function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClick"
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
                color: "#ADBAC7"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Button clicked!\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
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
            children: " "
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
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Click Me</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">;"
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
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "handleClick"
      }), " 은 컴포넌트가 리렌더링 되어도 동일한 함수 객체를 사용한다. 같은 메모리 주소를 사용하기 때문에 새로운 함수 객체를 생성하지 않는다. 따라서 메모리를 추가적으로 낭비하지 않는다."]
    }), "\n", _jsxs(_components.h2, {
      id: "onclick--fn",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#onclick--fn",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🚀 ", _jsx(_components.code, {
        children: "onClick={() => fn()}"
      })]
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " MyComponent"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Button clicked!\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Click Me</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">;"
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
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "onClick"
      }), "에 걸린 함수는 익명으로 선언되었다. 이전에 렌더링에서 생성했던 함수와 다른 함수로 판단하여 함수 객체를 새롭게 정의한다. 컴포넌트가 리렌더링 될 때마다 새롭게 함수 객체가 정의되고 이는 메모리 낭비로 이어진다."]
    }), "\n", _jsxs(_components.h2, {
      id: "인라인-익명-함수라서-재정의-되는-건가요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#인라인-익명-함수라서-재정의-되는-건가요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "인라인 익명 함수라서 재정의 되는 건가요?"]
    }), "\n", _jsx(_components.p, {
      children: "익명 함수이기에 재정의 되는 것이 맞다. 조금 더 자세히 들어가보자면, 이름이 선언된 함수는 같은 메모리 주소를 사용한다. 리렌더링이 되어도 함수 이름을 통해 메모리에서 같은 참조를 유지할 수 있는 것이다."
    }), "\n", _jsx(_components.p, {
      children: "익명 함수는 함수 이름이 없어, 같은 메모리를 참조할 수 없고, 때문에 리렌더링 때마다 새롭게 함수 객체를 생성한다. 이전 렌더링의 익명 함수와 별개의 함수로 인식되며, 메모리의 낭비로 이어진다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "중요한 것은 화살표 함수를 사용하는 데서 비롯된 것이 아니다. 모든 렌더링에서 새롭게 함수 객체를 생성하는 것에 있다."
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "왜-메모리가-낭비될까요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#왜-메모리가-낭비될까요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "왜 메모리가 낭비될까요?"]
    }), "\n", _jsxs(_components.p, {
      children: ["JavaScript는 새로운 함수 객체를 만들 때마다 새로운 메모리 공간을 할당한다. 이전 렌더링에서 생성된 함수는 더 이상 사용되지 않지만, GC(가비지 콜렉터)가 수집할 때까지 메모리 공간을 차지한 상태로 존재하게 된다. 이렇게 ", _jsx(_components.strong, {
        children: "리렌더링 때마다 생성된 함수 객체가 쌓이면서 메모리 낭비가 발생한다. 또한, 그렇게 생성된 메모리 공간을 가비지 콜렉터가 수집하면서 빈번한 수집이 일어나고 성능 저하가 발생할 수 있다."
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["리액트는 렌더링마다 onClick에 할당된 함수가 이전과 같은지 체크한다. ", _jsx(_components.strong, {
        children: "익명 함수는 렌더링마다 새로운 함수 객체이므로 리액트는 항상 변경되었다고 판단하게 되는데, 결국 불필요한 Virtual DOM 업데이트가 발생할 가능성이 높아진다."
      })]
    }), "\n", _jsxs(_components.h2, {
      id: "그렇다면-무조건-인라인-익명-함수를-피해야-하나요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#그렇다면-무조건-인라인-익명-함수를-피해야-하나요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "그렇다면 무조건 인라인 익명 함수를 피해야 하나요?"]
    }), "\n", _jsxs(_components.p, {
      children: ["꼭 그렇지만도 않다. 인라인 익명 함수를 사용하지 않는 것은 성급한 최적화라는 시선이 있는데, 인라인 익명 함수가 성능에 문제가 되는 것을 증명하지 않고도 성능에 문제가 되니 사용하지 말자 라는 것은 성급하다는 의견이다. 또, useCallback, useMemo를 사용하는 것보다 인라인 익명 함수를 전달하는 것이 더 나은 경우도 있다고 한다. 실무에서 사용하는 컴포넌트가 순수 컴포넌트인 경우는 드물기 때문이다. 그리고 성능을 최적화하는 데 쓰이는 코드에는 비용이 따른다. 정확히, ", _jsx("u", {
        children: "모든 라인의 코드에는 비용이 든다."
      })]
    }), "\n", _jsxs(_components.h3, {
      id: "usecallback-usememo를-사용하면-되잖아요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#usecallback-usememo를-사용하면-되잖아요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useCallback, useMemo를 사용하면 되잖아요?"]
    }), "\n", _jsx(_components.p, {
      children: "간단한 예시를 보며, 생각해보자."
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React, { useState, useCallback } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
              children: " Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
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
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount"
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
              children: "("
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  { "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
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
              children: " prev "
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
              children: ") }"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // useCallback이 없다면 간단히 끝남"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useCallback"
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
                color: "#DCBDFB"
              },
              children: "    setCount"
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
              children: " prev "
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
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, []); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 불필요한 종속성과 성급한 최적화"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}>Increment"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "버튼을 누르면 count를 증가시킨다."
    }), "\n", _jsx(_components.p, {
      children: "앞서 말했듯이 모든 라인에는 비용이 따른다. useCallback은 최적화를 위한 함수이지만, 내부적으로 메모리와 CPU 연산을 사용한다. 즉, 성능을 최적화 하기 위한 동작을 추가적으로 진행하는 것이다. 이걸로 useCallback을 사용하지 않았을 때보다 더 많은 연산을 하게 되는데, 함수 생성 비용이 낮다면, 혹은 연산이 가볍다면 useCallback을 사용하지 않는 것이 좋다."
    }), "\n", _jsx(_components.p, {
      children: "일반적으로, 리액트 컴포넌트가 리렌더링되면, 기존 함수는 GC에 의해 제거되고 새로운 함수 객체가 생성된다. 즉, 기존 함수 객체는 메모리에서 해제되므로 불필요한 점유가 발생하지 않는다. 따라서 메모리 낭비가 적은 반면에."
    }), "\n", _jsx(_components.p, {
      children: "useCallback을 사용하면 기존 함수 객체를 메모리에 유지하려고 하며, useCallback의 의존성이 변경될 경우 객체가 생성되면서 기존 함수도 그대로 유지된다. 따라서, 이전에 생성한 함수가 제거되지 않고 새로운 함수가 생성되어 메모리에 쌓인다."
    }), "\n", _jsx(_components.p, {
      children: "이전 함수가 참조되며, 보관하는 과정에서 이전 함수 객체도 계속 유지될 가능성이 있다. useCallback은 이전 함수 뿐만 아니라 의존성 배열의 값도 저장하고 비교해야 하는데, 이 과정에서 의존성 배열의 크기가 크거나 깊은 객체가 포함되어 있다면 오히려 성능에 좋지 않을 수 있다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "useCallback은 리렌더링 최적화에는 효과적일 수 있으나 메모리 최적화에 항상 좋은 것이 아니다!"
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
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React, { useState, useMemo } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
              children: " App"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
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
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount"
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
              children: "("
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
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
              children: " computedValue"
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
                color: "#F47067"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " count "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "; "
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [count]); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 불필요한 useMemo 사용"
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
              children: "  return"
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
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Computed "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Value"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "computedValue"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{() => "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " + 1)}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Increment"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "useMemo는 CPU 연산이 큰 계산 결과를 저장하고 재사용하는 것이 목적이다. 의존성이 변하지 않았다면, 새로운 계산을 하지 않고 기존에 계산된 값을 사용한다. 그러나 useCallback과 동일하게, 예시의 코드는 큰 계산을 필요로 하지 않는다."
    }), "\n", _jsx(_components.p, {
      children: "useMemo를 사용함으로써 이전 값과 비교하는 비용이 추가되며, 연산 비용보다 비교 비용이 더 나간다면, useMemo 없이 사용하는 것이 더 효율적이다.  useMemo를 변하지 않는 배열 정의에 사용할 수도 있겠다. 그러나 이 경우에는 리액트 컴포넌트의 바깥으로 빼내어 배열이 계속 선언되지 않도록 할 수도 있다. (모든 상황에서 그러할 수는 없겠지만)"
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React, { useState, useMemo } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
                color: "#6CB6FF"
              },
              children: " list"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"변하지\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"않는\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"배열\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "];"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 2. 이렇게 사용하는 편이 연산 비용없이 효율적일 수도 있다."
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
              children: " App"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " list"
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
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"변하지\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"않는\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"배열\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "], []);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 1. 이렇게 사용할 수도 있으나..."
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
              children: "  return"
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
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Computed "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Value"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "computedValue"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{() => "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " + 1)}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Increment"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "그렇다면-언제-사용해야-하나요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#그렇다면-언제-사용해야-하나요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "그렇다면, 언제 사용해야 하나요?"]
    }), "\n", _jsxs(_components.p, {
      children: ["Kent.C.Dodds 개발자가 말하기를, ", _jsx(_components.strong, {
        children: "참조 동일성, 비용이 많이 드는 계산"
      }), "에 사용할 수 있다고 했다. 아래의 코드는 Kent.C.Dodds 개발자가 작성한 블로그에서 내용을 가져왔다."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://kentcdodds.com/blog/usememo-and-usecallback",
        children: "https://kentcdodds.com/blog/usememo-and-usecallback"
      })
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Foo"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "bar"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "baz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
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
              children: " options"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { bar, baz };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  React."
            }), _jsx(_components.span, {
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
                color: "#DCBDFB"
              },
              children: "    buzz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(options);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [options]); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// we want this to re-run if bar or baz change"
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
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">foobar"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "}"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Blub"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Foo"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " bar"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"bar value\""
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " baz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} />;"
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
      children: "코드를 보면, useEffect의 종속성에 options 변수가 들어있다. 매 렌더링마다 useEffect는 options가 변경이 되었는지 참조 동일성 체크를 하게 될 것이다. 그런데 options는 객체이고 렌더링마다 새롭게 정의된다. 이전 options와 현재 options가 다른 메모리 주소를 갖는 것이다. 그렇다면, useEffect는 options가 달라졌다고 판단하고 렌더 되는 순간마다 호출이 된다."
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
              children: "// option 1"
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
              children: " Foo"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "bar"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "baz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  React."
            }), _jsx(_components.span, {
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
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " options"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { bar, baz };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    buzz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(options);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [bar, baz]); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// we want this to re-run if bar or baz change"
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
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">foobar"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "위처럼 수정할 수도 있을 것이다. 그러나 객체, 배열, 함수처럼 참조 타입이 들어오는 경우는 어떻게 하면 좋을까?"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Foo"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "bar"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "baz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  React."
            }), _jsx(_components.span, {
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
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " options"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { bar, baz };"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    buzz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(options);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [bar, baz]);"
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
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">foobar"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "}"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Blub"
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
                color: "#6CB6FF"
              },
              children: " bar"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useCallback"
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
              children: " {}, []);"
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
              children: " baz"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useMemo"
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
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "], []);"
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
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Foo"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " bar"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "bar"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "baz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "baz"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} />;"
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
      children: "이때 useCallback, useMemo를 사용할 수 있는 것이다. 그 외에도, useMemo를 활용한 예시를 찾아볼 수 있다."
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " CountButton"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
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
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}>{count}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "}"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " DualCounter"
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
              children: "count1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount1"
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
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " increment1"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " setCount1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
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
              children: " c "
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
              children: ");"
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
              children: "count2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount2"
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
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " increment2"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " setCount2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
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
              children: " c "
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
              children: ");"
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
              children: " ("
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    <>"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "CountButton count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{count1} onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{increment1} "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "CountButton count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{count2} onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{increment2} "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/>"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    </>"
            })
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "두 개의 버튼이 있다. 둘 중 하나를 클릭하여 count의 상태가 변경되면, DualCounter 컴포넌트는 리렌더링 될 것이다. 리액트에서는 부모 컴포넌트가 변경되어 리렌더링 되면, 모든 자식 컴포넌트 또한 리렌더링 된다. 자식 컴포넌트에서는 변경이 일어나지 않더라도 말이다. 효율적인 코드라면, 클릭한 함수의 컴포넌트만 변경되는 것이 맞지 않을까?"
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
                color: "#6CB6FF"
              },
              children: " CountButton"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "memo"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " CountButton"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}>{count}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  })"
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
              children: "  function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " DualCounter"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "count1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount1"
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
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " increment1"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useCallback"
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
                color: "#DCBDFB"
              },
              children: " setCount1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " c "
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
              children: "), [])"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "count2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount2"
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
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " increment2"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useCallback"
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
                color: "#DCBDFB"
              },
              children: " setCount2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " c "
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
              children: "), [])"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      <>"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "CountButton count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{count1} onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{increment1} "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "CountButton count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{count2} onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{increment2} "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/>"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      </>"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    )"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "React.memo를 사용하여 props가 변경될 때만 리렌더링을 시도할 것이다. 또한, props로 함수 객체를 전달하고 있는데, 이걸 useCallback으로 감싸서 전달한다면, 더욱더 불필요한 리렌더를 방지할 수 있다."
    }), "\n", _jsx(_components.p, {
      children: "또한 useMemo는 연산 비용이 큰 계산에도 효과적이다. 계산기, 배열, 정렬 등 연산하는 데 있어 많은 비용을 소모하는 로직은 useMemo를 사용할 수 있다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["그러나 어디까지나 성능 최적화에는 비용이 든다. 아무런 기준 없이 사용하는 것을 반대하는 개발자들도 많으니 연산 비용, 생성 비용을 고려해서 실제 성능을 측정한 뒤, 최적화를 시도해도 늦지 않는다는 의견이 많고, 나 또한 그게 맞지 않을까 싶은 입장이다. 할 수 있는 건 하되, 성능을 고려한다고 useCallback, useMemo를 남용하는 것은 좋지 않다.", _jsx(_components.br, {}), "\n", "관련 글"]
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.a, {
          href: "https://legacy.reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render",
          children: "https://legacy.reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render"
        })
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.a, {
          href: "https://medium.com/@ryanflorence/react-inline-functions-and-performance-bdff784f5578",
          children: "https://medium.com/@ryanflorence/react-inline-functions-and-performance-bdff784f5578"
        })
      }), "\n"]
    }), "\n", _jsxs(_components.h1, {
      id: "어떤-방식으로-코드의-메모리-비용을-줄일-수-있을까요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#어떤-방식으로-코드의-메모리-비용을-줄일-수-있을까요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "어떤 방식으로 코드의 메모리 비용을 줄일 수 있을까요?"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "React.memo"
        }), "와 ", _jsx(_components.code, {
          children: "PureComponent"
        }), " 사용"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "useCallback"
        }), ", ", _jsx(_components.code, {
          children: "useMemo"
        }), " 사용"]
      }), "\n", _jsx(_components.li, {
        children: "익명 함수 피하기"
      }), "\n", _jsx(_components.li, {
        children: "객체 리터럴 피하기(객체(오브젝트)를 인라인으로 넣는 걸 다시 고려해보세요.)"
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "React.lazy"
        }), "와 ", _jsx(_components.code, {
          children: "React.Suspense"
        }), " 사용 (코드 스플리팅)"]
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "1️⃣reactmemo와-purecomponent-사용",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#1️⃣reactmemo와-purecomponent-사용",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "1️⃣ React.memo와 PureComponent 사용"]
    }), "\n", _jsx(_components.p, {
      children: "부모 컴포넌트가 리렌더링되면, 자식 컴포넌트들도 함께 리렌더링된다. 자식 컴포넌트의 props가 변하지 않았더라도 다시 렌더링되는 데 이때 사용할 수 있는 것이 React.memo, PureComponent이다."
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
              children: "// 함수형 컴포넌트"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React, { memo } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// ❌ 일반 컴포넌트"
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
              children: " ComponentB"
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
              children: "props"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{props.propB}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// ✅ memo 적용 (성능 최적화)"
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
                color: "#6CB6FF"
              },
              children: " ComponentB"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "memo"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "props"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{props.propB}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "});"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 클래스형 컴포넌트"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React, { Component, PureComponent } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// ❌ 일반 클래스 컴포넌트"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "class"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " ComponentB"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " extends"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " Component"
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
              children: "  render"
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
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{this.props.propB}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "  }"
            })
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
              children: "// ✅ PureComponent 적용 (성능 최적화)"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "class"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " ComponentB"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " extends"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " PureComponent"
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
              children: "  render"
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
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{this.props.propB}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "  }"
            })
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
    }), "\n", _jsxs(_components.p, {
      children: ["위처럼 memo를 사용한다면, props가 변경되지 않는 한 자식 컴포넌트가 렌더링되는 일은 없어진다. 그러나 ", _jsx("u", {
        children: "이전 props와 새로운 props를 비교해야 하기 때문에 props가 크면 오히려 성능 저하가 될 수 있다. 특히, 컴포넌트를 props로 전달하게 되면, 비교 비용이 커질 수 있다."
      })]
    }), "\n", _jsxs(_components.h2, {
      id: "2️⃣usecallback-usememo-사용",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#2️⃣usecallback-usememo-사용",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "2️⃣ useCallback, useMemo 사용"]
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
              children: "// useCallback"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React, { useCallback } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " MyComponent"
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
                color: "#6CB6FF"
              },
              children: " handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useCallback"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Button clicked!\""
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
                color: "#ADBAC7"
              },
              children: "  }, []); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 의존성 배열이 비어 있으므로, 처음 생성된 함수 객체를 재사용함."
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}>Click me"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "// useMemo"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React, { useMemo } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " MyComponent"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "num"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Calculating...\""
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
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " num "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// num이 변경될 때만 계산됨."
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [num]); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// num이 변경될 때만 계산을 다시 실행"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Result: {result}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "예시에서 useCallback은 초기 렌더링 시 한 번만 생성되고 이후에도 같은 함수 객체를 사용한다. useMemo 또한, 종속성 배열의 num이 변경될 때만 계산을 다시 실행하게 되므로 메모리를 아낄 수 있다."
    }), "\n", _jsx("u", {
      children: "그러나 앞서 설명한대로 최적화를 위한 비교 연산 비용보다 생성 비용이 더 저렴하다면, 새롭게 생성하는 편이 메모리 최적화에 더 도움이 될 것이다."
    }), "\n", _jsxs(_components.h2, {
      id: "3️⃣익명-함수-피하기",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#3️⃣익명-함수-피하기",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "3️⃣ 익명 함수 피하기"]
    }), "\n", _jsx(_components.p, {
      children: "익명 함수를 피하기 위해 네이밍 함수를 사용할 수 있다. 혹은 useCallback을 사용하여 이전 함수를 재사용할 수 있다. 그러나 앞서 살펴본 것처럼 useCallback을 섣불리 사용함으로써 이전값과 비교하는 연산으로 인해 메모리를 더 잡아먹을 수도 있다는 걸 고려해야 한다."
    }), "\n", _jsxs(_components.h3, {
      id: "인라인-함수를-사용하는-다양한-방법",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#인라인-함수를-사용하는-다양한-방법",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "인라인 함수를 사용하는 다양한 방법"]
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
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Click</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "> "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 기본적인 사용"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(item.id)"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Click</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "> "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 매개변수 전달이 필요할 때"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "나는 리액트에서 함수가 매개변수를 받을 때(이벤트 객체가 아닌) 위처럼 사용한다. 익명 화살표 함수를 만들고, 콜백함수를 반환하는 방식이다."
    }), "\n", _jsxs(_components.p, {
      children: ["그러나 리액트에서 사용하는 기본 방식은 첫번째 라인인데, ", _jsx(_components.code, {
        children: "()"
      }), " 호출을 붙이지 않는 까닭은 바로 실행됨을 방지하기 위해서다. click 이벤트가 발생했을 때만 함수가 실행되어야 하는데, ", _jsx(_components.code, {
        children: "()"
      }), " 를 붙여 ", _jsx(_components.code, {
        children: "handleClick()"
      }), " 로 작성하면, 컴포넌트가 생성되고 콜백함수는 바로 실행된다."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["Vue는 리액트와 반대로 ", _jsx(_components.code, {
          children: "handleClick()"
        }), "를 작성해야 동작하는 걸로 알고 있다."]
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
      id: "그렇다면-매개변수를-전달하기-위해서-어떤-방식을-사용해야-할까",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#그렇다면-매개변수를-전달하기-위해서-어떤-방식을-사용해야-할까",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "그렇다면, 매개변수를 전달하기 위해서 어떤 방식을 사용해야 할까?"]
    }), "\n", _jsxs(_components.p, {
      children: ["과제를 수행하며 다른 사람의 코드를 리뷰할 수 있는 건, 큰 기회인 것 같다. 새로운 시각을 가져다주기 때문인데, 어떤 분께서 고차함수를 이용하여 사용하는 것을 봤었다. ", _jsx(_components.code, {
        children: "onClick={handleClick(item)}"
      }), " 처럼 사용하고 계셔서 처음에는 이게 바로 실행되지 않을까 싶었다. 조금 더 코드를 살펴보니 고차 함수이기 때문에 바로 실행되지 않는 것이었다. 실행을 하기 위해서는 ", _jsx(_components.code, {
        children: "handleClick()()"
      }), " 호출을 두번 선언해야한다."]
    }), "\n", _jsx(_components.p, {
      children: "그런데 고차 함수를 사용하는 것이 하나의 방법이었다. 매개변수를 전달하기 위해서 익명 함수로 콜백 함수를 넘기는 것이 아니라 고차 함수를 사용하여 매개변수를 넘기는 것이다."
    }), "\n", _jsxs(_components.p, {
      children: ["그러면, 고차 함수의 메모리 사용은 어떨까. 익명 함수와 비교했을 때 어느 정도를 사용하게 될까? 고차 함수도 내부 함수는 익명으로 선언되지 않나? ", _jsx(_components.code, {
        children: "const fn = () => () => ..."
      }), " 그래서 직접 실험해보기로 했다."]
    }), "\n", _jsxs(_components.h3, {
      id: "실험-내역",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#실험-내역",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "실험 내역"]
    }), "\n", _jsx(_components.p, {
      children: "동일한 환경에서 테스트 해보았다. 코드는 아래처럼 작성했고, 리액트에서 실험했기 때문에 부차적인 오류가 있을 수 있다. 하나의 탭을 띄우고 버튼을 5번 눌러보았다. 실험이 완료된 탭은 자료 캡쳐 후 제거하고 새로운 탭을 열어 동일하게 실험했다."
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
              children: " generateLargeArray"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
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
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1000000"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "fill"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'test'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 100만 개의 문자열 배열 생성"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 1️⃣ 네이밍된 콜백 함수"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'콜백 함수 실행'"
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
              children: "    const"
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
              children: " generateLargeArray"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`데이터 크기: ${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 2️⃣ 인라인 익명 함수 (onClick={()=> handleClickHighOrder()})"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClickInline"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'콜백 함수 실행'"
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
              children: "    const"
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
              children: " generateLargeArray"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`데이터 크기: ${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 3️⃣ 고차 함수 (onClick={handleClickHighOrder()})"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClickHighOrder"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'고차 함수 실행'"
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
              children: "    const"
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
              children: " generateLargeArray"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`데이터 크기: ${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 4️⃣ `useCallback`으로 최적화된 콜백 함수"
            })
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
              children: " handleClickUseCallback"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useCallback"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'useCallback 함수 실행'"
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
              children: "    const"
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
              children: " generateLargeArray"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`데이터 크기: ${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, []);"
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
              children: "  "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // ✅ (메모리 체크)"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " checkMemoryUsage"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
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
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (window.performance "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " window.performance.memory) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'🧠 현재 메모리 상태:'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", window.performance.memory);"
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
              children: "  };"
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
              children: "  return"
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
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* 1️⃣ 일반 콜백 함수 */"
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
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">콜백 함수</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "br"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
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
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* 2️⃣ 인라인 익명 함수 */"
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
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClickInline"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">인라인 익명 콜백 함수</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "br"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
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
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* 3️⃣ 고차 함수 */"
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
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "handleClickHighOrder"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">고차 함수</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "br"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
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
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* 4️⃣ useCallback 최적화 */"
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
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "handleClickUseCallback"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">useCallback 함수</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "br"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "        onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() "
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
              children: "          console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'()=> {} 인라인 익명 함수'"
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
              children: "          const"
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
              children: " generateLargeArray"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "          console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`데이터 크기: ${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
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
              children: "          return"
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
              children: "        }"
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
              children: "      >"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        인라인 익명 함수"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      </"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "br"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
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
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* ✅ 메모리 사용량 체크 */"
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
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "checkMemoryUsage"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">메모리 체크</"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "br"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
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
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "일반-콜백-함수-onclickhandleclick",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#일반-콜백-함수-onclickhandleclick",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "일반 콜백 함수 ", _jsx(_components.code, {
        children: "onClick={handleClick}>"
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/f8b2880f-cd24-4bf7-a905-d52ea73dd037/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=2471d99cd966218ddf8804a932e253eb7192634f073013450e67de92e5ca01a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/fd6de952-b441-4ece-87ad-758aab39c9ab/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=e3e7d3db74827f9a06998403e5721c5178195e9c2cbbc5201bcd800ae5012595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
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
              children: "// 누르기 전"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 4GB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7083405"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 6.75MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5524981"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 5.27MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "187"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 5번 누른 후"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 4GB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "11113885"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 \t10.60 MB  = 3.85 증가"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "9651361"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 9.20 MB = 3.93 증가"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "293"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "//= 106 KB 차이"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "인라인-익명-콜백-함수-onclick--handleclickinline",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#인라인-익명-콜백-함수-onclick--handleclickinline",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "인라인 익명 콜백 함수 ", _jsx(_components.code, {
        children: "onClick={() => handleClickInline()}"
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/6d29b87d-5581-43ea-bb37-e221d8966213/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=ed01ad6dfb1db47fa3c38662d80ce79e37c24401ba2c9c19b01d27a1f946bd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/0003b1b8-aaff-4690-8520-9f104a40f069/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=f8c2b6971ba63e326a029453b3bc205f7bc0c4cfd2f99134fd893e96391fa6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
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
              children: "// 누르기 전"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7343403"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 7.00 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5560751"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 \t5.30 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "062"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 5번 누른 후"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "11636043"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 \t11.09 MB  = 4.09 증가"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "9624039"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 \t9.18 MB  = 3.88 증가"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "196"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// = 134 KB 차이"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "고차-함수-onclickhandleclickhighorder",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#고차-함수-onclickhandleclickhighorder",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "고차 함수 ", _jsx(_components.code, {
        children: "onClick={handleClickHighOrder()}"
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/bed4df45-3d94-4a62-b3bb-9d6532c3b754/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=f6abeca166c351fe84b6bf475c1cb899a812391242f335fdb349ac5530989f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/6940e316-6923-4e15-a350-e7ac2d688771/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=06fb0d2e28c4a243406b939a025bad2821759f923f375b0777d7d2c2576e4e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
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
              children: "// 누르기 전"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7228797"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 6.89 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5775961"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 5.51 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "109"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 5번 누른 후"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "6036679"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 5.76 MB  = 1.13 감소"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5067611"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 4.83 MB = 0.68 감소"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "212"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// = 103 KB 차이"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "usecallback-함수-onclickhandleclickusecallback",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#usecallback-함수-onclickhandleclickusecallback",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useCallback 함수 ", _jsx(_components.code, {
        children: "onClick={handleClickUseCallback}"
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/f9893c45-614b-4ba4-b23f-359570daabc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=113d06668d130ddc8b49d45b23269ed1480ebb7a77414e3164eb9f6dc7b0134a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/4b0f1539-33ff-4b83-8e3a-87a47d829bd4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=55e47cb7bf04ddd84b09d92ef4b9d715bf1cc67458bb5344ee48d99e1d3d506d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
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
              children: "// 누르기 전"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "6314405"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 6.02 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5581477"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 5.32 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "941"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 5번 누른 후"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "10312935"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 9.84 MB  = 3.82 증가"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "9095279"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 \t8.67 MB  = 3.35 증가"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "033"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// = 92 KB 차이"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "인라인-익명-함수-onclick",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#인라인-익명-함수-onclick",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "인라인 익명 함수 ", _jsx(_components.code, {
        children: "onClick={()=>{...}}"
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/f4afa5df-3cd8-4395-8c94-545aae01e4a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=8bdd898df7d7aeab9ddd13e23a344bb54a097ec8d02badbed14b85e4d0d2137f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8bf87fbf-5e32-45e1-8f1d-137892d7a2fd/222a2d05-6825-4030-bbde-7c7e4c8ae189/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667467F3QU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDcp0vbU5fQuq0Zed%2FpA53KQNQapjFy%2BHS%2FeeN4Co1KqAiEAuT6LYaWOFT45tfmxvAiT4DiaSS%2F1Ipn%2Fs9i1aurb8REq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEfequlkpVy3ISeg7SrcAwU%2Fo37bNtymnSqagtX7POTZqpNgSUW33QYMK3O%2FM%2BT4%2FNroA8VoTC9wv6%2FYf5xhlb1YPCJPNmQuVrhLABhdJjIwkxLRSEx9wo0Koa3Bow5TwauCL5BSWBq%2F7eyvepFczjrFkmrgChLF3LhvbIanPVZMFXeR2%2F4Gr5tKf2FZFRMFH%2FdZriv1zGWJyOBY%2FNTJgUpygJD%2FDbzRdV3s5rLMqm6N7f16KO3Jxq5UeMEY%2FMpNs1BLceHmI8RDTTSClydHvl9SalNuzW2PObGxz4imfn69Lb8GVAYAlQuyiFr6KbKScfii%2B1o%2BW%2BmP7zXuhZ8ljao6s4kD%2BAHcEYelhRSb95yZeQPVx6JUcEhKkMPwCpWqvcrItcr%2B8Rr05lHDfhySpH9RyTaoRjeH%2BbL5SJvrPEfVCVwNAoDQbf1MZpEp2qijKq%2BfrOh7YxL5LOmyowOcYdGGK79LF5gclMVXYkFNQOPofv2LQy5QPwnS0QwthYE5%2BH4z%2FGdMFiYM7sG6aSzC6svzhvJDVFZ9GB0FB4mGzb4BKOieXjVlUBFK4%2FNNaPvN0fUQ68Yu%2BxGUlHoM4Vejf2%2FTkhUXrAQuB5hGV3TLn7jH1f6sUEIYouQZi9yxZa4TEBKgamFVxzl3UlcHMLCop84GOqUBDWwIfQNVu80I0jGxwqc76qBiPhdVAL89x%2FiXe4BMj75ybTuXzxHc0EYOyKlaD%2Ff60u30NUGI61nERDLBfWBkbL7bFaCuQ9j9t4k5VKv1y3qX3PQ050pkQG1dC7GHLnkEMJYltE4mNMdW2on3CETlaFW6YT%2F%2FN5w4PtPhl52%2FS9n%2F14ajc6OCkkdOc%2BQj00vBl%2Fiyhc6z1J%2BDtpSC2xDTBRCubL%2Bo&X-Amz-Signature=c5a0605970358dd960071596c20078779d1daaa3a48b6e1dc94b98d924768ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        alt: "image.png"
      })
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
              children: "// 누르기 전"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7377782"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 7.03 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5876770"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 5.61 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "109"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 5번 누른 후"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "jsHeapSizeLimit"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4294705152"
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
                color: "#F69D50"
              },
              children: "totalJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "11637638"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 11.10 MB  = 4.07 증가"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "usedJSHeapSize"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "9510450"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 약 \t9.07 MB  = 3.46 증가"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "211"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " KB"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// = 102 KB 차이"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsxs(_components.strong, {
          children: ["메모리 스냅샷 실험 결과(****", _jsx(_components.code, {
            children: "Memory Snapshot"
          })]
        }), ")"]
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "인라인 익명 콜백 함수 > 일반 콜백 함수 > 고차 함수 > 인라인 익명 함수 > useCallback 함수"
        })
      }), "\n", _jsxs(_components.p, {
        children: ["정말 의외의 결과가 나왔다. 내가 주로 사용하는 ", _jsx(_components.code, {
          children: "()=> handleClick()"
        }), " 방식이 가장 많은 메모리를 사용한 것이다. 메모리 스냅샷과 메모리를 console로 찍어 확인하는 두가지 방식으로 실험을 거쳤는데, 인라인 익명 함수가 가장 많은 메모리를 사용할 것이라는 예상을 깨고 인라인 콜백 함수가 가장 많은 메모리 사용을 보였다."]
      }), "\n", _jsx(_components.p, {
        children: _jsxs(_components.strong, {
          children: ["메모리 콘솔 실험 결과(", _jsx(_components.strong, {
            children: _jsx(_components.strong, {
              children: _jsx(_components.code, {
                children: "performance.memory"
              })
            })
          }), ")"]
        })
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "인라인 익명 콜백 함수 > 인라인 익명 함수 > 일반 콜백 함수 > useCallback 함수 > 고차함수"
        })
      }), "\n", _jsx(_components.p, {
        children: "5번의 클릭을 했을 경우, 대체적으로 3MB~4MB 정도의 메모리 증가를 유발했다. 수치로 환산하니 생각보다 높은 수치이다. 또한, 고차 함수를 실험해보는 도중 전혀 예상과 다른 수치가 나왔는데, 값이 감소한 것이다. GC가 작동했을 가능성이 있는데, 왜 고차 함수에서만 작동을 했을까? 이건 나중에 알아보기로 하자."
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
      id: "실험에-대한-생각",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#실험에-대한-생각",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), _jsx(_components.strong, {
        children: "실험에 대한 생각"
      })]
    }), "\n", _jsx(_components.p, {
      children: "메모리 스냅샷을 찍은 것과 메모리 콘솔로 확인한 결과가 달라서 당황했다. 그러나 콘솔로 찍은 메모리는 실시간으로 돌아가며, 가비지 컬렉터 실행 여부에 따라 값이 달라질 수 있어 정확한 순간을 캐치할 수 없었다. 메모리 스냅샷의 경우, 원하는 순간에 사용되는 메모리를 알아볼 수 있고 할당된 객체와 사용 중인 메모리 크기를 분석한다."
    }), "\n", _jsx(_components.p, {
      children: "앞서 추측했듯이 익명 함수가 제일 많은 메모리를 사용할 것이라고 생각했다. 메모리 콘솔에서는 2순위이긴 하지만 스냅샷의 결과에서는 하위권에 속한다. 예측한 결과가 완전히 빗맞은 것이다…"
    }), "\n", _jsxs(_components.p, {
      children: ["왜 위와 같은 결과가 나왔는지 생각해보자. GPT에 물어보니 다음과 같은 의견을 얻을 수 있었다. 인라인 익명 콜백 함수, 이름에서 알 수 있듯이 익명 함수가 포함되어 있다. ", _jsx(_components.code, {
        children: "()=>"
      }), " 익명 함수이기 때문에 렌더링마다 새로운 함수 객체를 생성한다. 그리고 콜백 함수를 실행하고 내부 로직을 실행한다. 즉, ", _jsx("u", {
        children: _jsx(_components.strong, {
          children: "익명 함수 + 콜백 함수"
        })
      }), " ", _jsx("u", {
        children: "라는 두가지 동작을 하기 때문에 가장 많은 메모리를 사용한 것이다."
      })]
    }), "\n", _jsx(_components.p, {
      children: "그럼, 고차 함수는?? 고차 함수 또한 내부적으로 익명 함수를 사용하지 않나?"
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
              children: " handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"click me!\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
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
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "click"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["고차 함수의 구조를 살펴보면, 이벤트에 ", _jsx(_components.code, {
        children: "handleClick()"
      }), " 코드를 작성한다. 고차 함수가 아닌 일반 함수라면 즉시 실행될 것이다. 그렇지만, 구조상 고차 함수를 사용해도 외부 함수는 곧바로 실행될 것이다. 그러나 함수를 리턴하고 있어 바로 실행되지 않을 뿐이며, 내부 함수는 렌더링마다 생성된다."]
    }), "\n", _jsx(_components.p, {
      children: "이 방식으로 사용했을 때, 익명 콜백 함수보다 메모리 사용이 적은 이유가 곧바로 실행된다는 것이면 어떨까? 즉, 함수 객체를 하나만 생성하는 것으로 익명 콜백 함수보다 적은 메모리를 사용하는 것이다."
    }), "\n", _jsxs(_components.h3, {
      id: "익명-함수를-피하고-매개변수를-전달할-방법들",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#익명-함수를-피하고-매개변수를-전달할-방법들",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "익명 함수를 피하고 매개변수를 전달할 방법들"]
    }), "\n", _jsx(_components.p, {
      children: "어쨌든, 실험 결과만 두고 본다면, 우리는 익명 함수를 꺼려해야 할 이유가 있는 것이다. 익명 함수를 사용하지 않고 어떻게 매개변수를 넘길 수 있을까? 고차 함수 말고 다른 방법은 없을까?"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "useCallback"
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
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useCallback"
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
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Clicked item:\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", item);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, []);"
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
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{()=> "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "click"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 그렇지만, useCallback을 사용해야 할 만큼 메모리 연산이 큰 로직일지에 대한 고려가 필요하다..."
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "고차 함수"
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
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClick"
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
              children: " () "
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
              children: "\t console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Clicked item:\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", item);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
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
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "click"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 어쨌든 handleClick(item) 호출하게 되면 내부 함수는 익명 함수이지만..."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 메모리 사용이 적기 때문에 합리적인 사용일 것 같다."
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "bind()"
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
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClick"
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
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Clicked item:\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", item);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
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
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{handleClick.bind(null, item)}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "click"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 괜찮아보이지만, 다른 개발자들로부터 왜 이렇게 했는지 질문을 받게 될 것도 같음..."
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "결론",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#결론",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "결론"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["여러가지 방면에서 살펴본 것 같은데, 실험 내역에서 확인할 수 있듯이 함수마다 결과 차이가 크게 나지 않는다. 여기서 그 내용이 떠오르는 것 같다. ", _jsx("u", {
          children: "성급히 메모리를 최적화하려는 시도 말고, 차라리 코드를 개선하는 시도를 하는 것이 더 나을 수도 있다."
        })]
      }), "\n", _jsx(_components.p, {
        children: "팀에서 요구하는 방식이 있다면, 그걸 따르는 것이 가장 효율적이고, 어쩌면 메모리 낭비를 줄이기 위해 함수 사용을 달리 할 수도 있겠지만, 증명되지 않은 최적화를 가지고 어떻게 설득할 것인지에 대해서도 천천히 생각해봐야 할 문제인 것 같다."
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "4️⃣객체오브젝트를-인라인으로-넣는-걸-다시-고려해보세요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#4️⃣객체오브젝트를-인라인으로-넣는-걸-다시-고려해보세요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "4️⃣ 객체(오브젝트)를 인라인으로 넣는 걸 다시 고려해보세요."]
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// props에 바로 객체를 생성하여 전달"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Components"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " props"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{name:"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"kim\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "/>"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "ComponentB"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " style"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{ color: "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"blue\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", background: "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"gold\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 객체를 별도로 저장하여 props로 전달"
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
                color: "#6CB6FF"
              },
              children: " name"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { name:"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"kim\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
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
                color: "#6CB6FF"
              },
              children: " myStyle"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { color: "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"blue\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", background: "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"gold\""
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
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Components"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " props"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "name"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "/>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "ComponentB"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " style"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "myStyle"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "컴포넌트가 리렌더링 될 때마다 새로운 객체가 생성된다. 특히, props로 객체를 전달하게 되면, 이전 값과 새로운 값을 서로 다른 객체라 판단하기 때문에 불필요한 리렌더링이 발생할 수 있다."
    }), "\n", _jsx(_components.p, {
      children: "따라서, 객체를 별도로 저장하고 사용해야 한다. 리렌더링이 되어도 객체는 동일한 메모리 주소를 사용하게 된다. 그렇지만 전역 상태로 유지하는 것에 대한 부작용이 있을 수 있으니 최소한의 범위에서만 사용하는 것이 좋을 듯."
    }), "\n", _jsxs(_components.h2, {
      id: "5️⃣reactlazy와-reactsuspense-사용",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#5️⃣reactlazy와-reactsuspense-사용",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "5️⃣ ", _jsx(_components.code, {
        children: "React.lazy"
      }), "와 ", _jsx(_components.code, {
        children: "React.Suspense"
      }), " 사용"]
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React, { lazy, Suspense } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " BlogPosts"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " lazy"
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
                color: "#F47067"
              },
              children: " import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"./BlogPosts\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "));"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " MyBlog"
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
              children: "  return"
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
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Suspense fallback"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{<div>Loading"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "...</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "BlogPosts "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      </"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Suspense"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "BlogPosts가 로드될 때까지 화면에는 “로딩중…” 메세지를 표시한다. 비동기 컴포넌트 로드가 완료되면, 그때서야 BlogPosts를 렌더링한다."
    }), "\n", _jsx(_components.p, {
      children: "즉, Suspense는 자식 요소를 로드하기 전까지 화면에 대체 UI를 보여준다. 보통은 로딩 스피너나 스켈레톤처럼 간단한 Placeholder를 활용한다. 반대로 fallback을 너무 무겁게 만들면 오히려 렌더링 속도를 느리게 만들 수 있으니 유의해야 한다."
    }), "\n", _jsx(_components.p, {
      children: "해당 방법이 메모리 비용을 줄일 수 있는 까닯은 Suspense가 컴포넌트를 메모리에 올리지 않고 렌더링을 지연시키기 때문에 해당 컴포넌트에서 사용되는 state 또한 렌더링하지 않아 메모리 사용량이 줄어든다."
    }), "\n", _jsxs(_components.p, {
      children: ["그러나 마찬가지로 너무 작은 컴포넌트까지 ", _jsx(_components.code, {
        children: "lazy"
      }), "로 감싸는 것은 의미가 없고, 너무 많은 사용은 잦은 네트워크 요청으로 성능이 저하될 수 있다. ", _jsx(_components.code, {
        children: "Suspense"
      }), " 역시, 여러곳에 사용한다면 UI 렌더링이 일관적이지 않다. 따라서 사용하기 전에 정말 이곳에 필요한가에 대한 고민을 해봐야 한다."]
    }), "\n", _jsxs(_components.h1, {
      id: "여기까지-학습하고-난-후의-결론",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#여기까지-학습하고-난-후의-결론",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "여기까지 학습하고 난 후의 결론"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "익명 함수 > 고차 함수 > 익명 콜백 함수 > 콜백 함수"
        })
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "처음 예상에서는 익명 함수가 무조건 메모리 사용이 많을 거라 생각했다. 그러나 직접 실험한 결과는 달랐다. 익명 콜백 함수가 더 많은 메모리를 사용했다. 단순히, 메모리 참조를 통해 같은 함수 객체를 사용한다. 라는 것에만 집중한 나머지, 함수가 실행되는 동작까지는 생각하지 못했던 것이다. 익명 콜백 함수는 두 개의 메모리 공간을 소비하니 한 개의 메모리 공간만 소비하는 익명 함수보다 메모리 사용이 많다."
    }), "\n", _jsx(_components.p, {
      children: "또, 가비지 컬렉터가 언제 움직이냐에 따라 메모리 실험 결과도 달라졌는데… 이건 아직 알지 못하는 분야라 가비지 컬렉터가 움직였을 수도 있겠구나 예상만 하고 넘어가야겠다. 혹은 리액트 환경에서 실험을 진행한 것이니 리액트에서 최적화를 실행한 것일 수도 있겠다… 그러나 자세한 내막은 모른다…"
    }), "\n", _jsx(_components.p, {
      children: "익명 함수가 메모리를 많이 사용한다는 것에 의문을 가지고 직접 조사하며, 실험까지 한 결과, 한가지 깨달은 것은 있다. 메모리 사용이 겹치면 큰 용량을 차지하겠지만… 이걸 생각만큼 신경써야 할까? 당장 내가 진행하는 프로젝트가 작고 소중한 크기라면 더더욱 신경 쓸 필요는 없겠다. 회사에서 사용하는 대규모 프로젝트라면 어떨까? 고려해볼만 하다. 특히, 성능을 최우선으로 한다면 그렇다."
    }), "\n", _jsx(_components.p, {
      children: "함수를 선언하는 것, 성능을 고려하며 작성하는 코드가 팀 내의 규칙으로 존재한다면 그렇게 해도 상관없을 것 같다. 익명 함수를 사용하지 말자. 객체는 따로 선언하여 주입하자. bind를 사용하여 매개변수를 전달한다. 등등… 그렇지만 정해진 것이 없는 코드라면, 성능을 우선시 하는 코드를 작성하는 것과 최적화를 위한 코드 수정이 더 많은 리소스를 잡아먹지 않을까?"
    }), "\n", _jsx(_components.p, {
      children: "또, 앞서 작성했듯이 성급한 최적화가 오히려 많은 메모리를 소모할 수도 있다. 타인을 설득하기 위해서는 근거가 필요한 것처럼 최적화에도 근거가 필요하다는 점이다. 성능을 올리고 최적화를 하고 싶다면, 우선 어떤 점이 느린지 증명해야 한다. 이 방법이 빠르다 라는 것보단 이 방법은 느리다를 설명하며, 최적화하는 측면이 더 믿음직스럽지 않을까?"
    }), "\n", _jsxs(_components.p, {
      children: ["내가 익명 함수를 조사하며 느낀 바는 위와 같다. 그러나 예상과 다르다는 건 아직도 놀랍다… 진짜로. 고차 함수도 높게 나오긴 했지만 인라인 익명 함수가 더 높게 나온다는 것에… 나는 이렇게 작성해왔는데도. 실질적인 조사도 진행해봤으니 다음부터는 익명 함수 대신 bind나 고차함수를 사용해봐야겠다. ", _jsx(_components.del, {
        children: "(그러나 리뷰를 하면 왜 사용했는지에 대해서도 매번 설명해야 할 것 같지만…)"
      })]
    }), "\n", _jsxs(_components.h1, {
      id: "참고-자료",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#참고-자료",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "참고 자료"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://medium.com/@ryanflorence/react-inline-functions-and-performance-bdff784f5578",
        children: "https://medium.com/@ryanflorence/react-inline-functions-and-performance-bdff784f5578"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://medium.com/steady-study/%EB%B2%88%EC%97%AD-react-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%ED%95%A8%EC%88%98-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%84%B1%EB%8A%A5-9aef85552f2b",
        children: "https://medium.com/steady-study/%EB%B2%88%EC%97%AD-react-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%ED%95%A8%EC%88%98-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%84%B1%EB%8A%A5-9aef85552f2b"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://flexport.engineering/ending-the-debate-on-inline-functions-in-react-8c03fabd144",
        children: "https://flexport.engineering/ending-the-debate-on-inline-functions-in-react-8c03fabd144"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://www.digitalocean.com/community/tutorials/react-keep-react-fast#avoid-anonymous-functions",
        children: "https://www.digitalocean.com/community/tutorials/react-keep-react-fast#avoid-anonymous-functions"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://www.reddit.com/r/reactjs/comments/uld88i/are_using_anonymous_functions_and_inline/?rdt=55036",
        children: "https://www.reddit.com/r/reactjs/comments/uld88i/are_using_anonymous_functions_and_inline/?rdt=55036"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://www.reddit.com/r/reactjs/comments/1amtuv3/usememo_or_usecallback_which_should_i_use/",
        children: "https://www.reddit.com/r/reactjs/comments/1amtuv3/usememo_or_usecallback_which_should_i_use/"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://kentcdodds.com/blog/usememo-and-usecallback",
        children: "https://kentcdodds.com/blog/usememo-and-usecallback"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/",
        children: "https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://dev.to/wallacefreitas/optimizing-re-rendering-in-react-best-practices-5683",
        children: "https://dev.to/wallacefreitas/optimizing-re-rendering-in-react-best-practices-5683"
      })
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
