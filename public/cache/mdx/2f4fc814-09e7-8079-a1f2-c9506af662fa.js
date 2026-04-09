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
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://react.dev/learn/render-and-commit",
        children: "https://react.dev/learn/render-and-commit"
      }), " 의 ", _jsx(_components.em, {
        children: "Illustrated by"
      }), " ", _jsx(_components.a, {
        href: "https://nearestnabors.com/",
        children: _jsx(_components.em, {
          children: "Rachel Lee Nabors"
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://react.dev/images/docs/illustrations/i_render-and-commit1.png",
        alt: "i_render-and-commit1.png"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://react.dev/images/docs/illustrations/i_render-and-commit2.png",
        alt: "i_render-and-commit2.png"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://react.dev/images/docs/illustrations/i_render-and-commit3.png",
        alt: "i_render-and-commit3.png"
      })
    }), "\n", _jsx(_components.p, {
      children: "Trigger"
    }), "\n", _jsx(_components.p, {
      children: "Render"
    }), "\n", _jsx(_components.p, {
      children: "Commit"
    }), "\n", _jsx(_components.p, {
      children: "사용자가 식당에 들어가 주문을 한다. 그럼, 주문을 받은 서버가 주방에 주문 목록을 넘기게 된다. 주문 목록을 통해 요리를 시작하고 모든 요리가 완성되면 서버에 전달한다. 서버는 완성된 요리를 사용자에게 넘긴다."
    }), "\n", _jsx(_components.p, {
      children: "이러한 과정이 리액트에서 동작하는 렌더와 커밋으로 표현할 수 있다."
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.em, {
        children: "사용자가 식당에 들어가 주문을 한다."
      }), " → 개발자가 컴포넌트 코드를 작성한다."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.em, {
        children: "주문을 받은 서버가 주방에 주문 목록을 넘긴다. →"
      }), " 리액트가 렌더 단계에서 변경해야 할 목록들을 계산한다."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.em, {
        children: "주문 목록을 통해 요리를 시작한다"
      }), " → 리액트가 커밋 단계로 UI에 반영하며, 외부 세계와 소통한다."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.em, {
        children: "서버는 완성된 요리를 사용자에게 넘긴다."
      }), " → 반영된 UI를 개발자가 확인한다."]
    }), "\n", _jsxs(_components.h2, {
      id: "렌더는-가상-dom을-계산하고-커밋은-진짜-dom을-변경하는-거-아니에요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#렌더는-가상-dom을-계산하고-커밋은-진짜-dom을-변경하는-거-아니에요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "렌더는 가상 DOM을 계산하고, 커밋은 진짜 DOM을 변경하는 거 아니에요?"]
    }), "\n", _jsx("u", {
      children: _jsx(_components.em, {
        children: "사용자가 count 버튼을 누르면, 리액트는 해당 변화를 계산한다. 그리고 변화를 토대로 가상 DOM에 반영한다. 그리고 진짜 DOM 변경하는 고정을 거친다."
      })
    }), "\n", _jsxs(_components.p, {
      children: ["라고 생각했었다. 그러나 반은 틀린 설명이다. 왜 ", _jsx(_components.strong, {
        children: "반은"
      }), " 틀린 설명일까?"]
    }), "\n", _jsxs(_components.h2, {
      id: "언제든-중단-가능한-그룹과-시작하면-끝을-봐야하는-그룹이-있었어",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#언제든-중단-가능한-그룹과-시작하면-끝을-봐야하는-그룹이-있었어",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "언제든 중단 가능한 그룹과 시작하면 끝을 봐야하는 그룹이 있었어…"]
    }), "\n", _jsxs(_components.p, {
      children: ["다시 처음의 설명으로 되돌아가보자. 식당에서 이루어지는 상황에 대해 말해봤었다. 손님이 식당에 들어가 ", _jsx("u", {
        children: _jsx(_components.em, {
          children: _jsx(_components.strong, {
            children: "A요리"
          })
        })
      }), "를 주문하면, 주문서를 토대로 요리가 만들어지고, 손님 앞까지 서브된다. 그런데 여기서 상황을 조금 바꾸어보겠다. 손님이 직원에게 주문을 했다. 그러고나서 5초 뒤에 다른 메뉴 ", _jsx("u", {
        children: _jsx(_components.em, {
          children: _jsx(_components.strong, {
            children: "B요리"
          })
        })
      }), "로 변경하고 싶어진 것이다. 여기서 다시 직원을 불러 메뉴를 변경하도록 조치했다. 그럼 직원이 주방으로 달려가 변경된 메뉴를 설명한다."]
    }), "\n", _jsx(_components.p, {
      children: "손님 앞에 나오는 메뉴는 A요리일까? B요리일까? 결과적으로 B요리가 나오게 될 것이다. 도중에 중단하고 다른 메뉴를 주문했으니까 말이다. 그럼 다시 상황을 바꿔보자."
    }), "\n", _jsx(_components.p, {
      children: "A요리를 주문했고, 주문서가 주방에 전달되었다. 이번엔 5초가 아닌 20분이라 가정하여 주문을 변경하고자 했다. 직원을 불러 A요리가 아닌 B요리로 변경한다 전달했다. 그럼, 직원은 주방에 찾아가 메뉴 변경을 설명한다. 그러나 주방에서는 이미 요리가 시작되었으니 변경할 수 없다고 설명한다. 직원은 손님에게 찾아와 이미 요리가 시작되었으니 변경할 수 없음을 고지한다. 결국, 손님은 A요리를 받게 된다."
    }), "\n", _jsx(_components.p, {
      children: "여기서 이해할 수 있는 것은, 주방에 들어가기 전까지 메뉴를 얼마든지 변경할 수 있다는 점이다. 그리고 그것은 어떠한 손해도 일으키지 않고 어떤 트러블도 만들지 않는다. 그러나 주방에 들어간 뒤 작업이 시작되면, 그 이후는 변경할 수 없다. 변경하게 되더라도 그건 문제를 일으킬 것이다."
    }), "\n", _jsx("u", {
      children: "렌더와 커밋은 그런 것이다. 얼마든지 중단해도 되는 렌더와 중단할 수 없는 커밋으로 이루어져있다. 즉, 화면에 반영하기 전까지의 모든 계산은 중단되고 재개되더라도 상관없다. 그러나 계산이 끝나고 외부 호출이 이루어지며 실제 DOM을 움직이는 단계에 들어서면, 중단할 수 없게 되는 것이다. 리액트는 그렇기에 중단 가능성을 염두로 두 단계를 나누었다."
    }), "\n", _jsxs(_components.h3, {
      id: "렌더는-가상-dom을-계산하고-커밋은-진짜-dom을-변경하는-거-아니에요-라는-대답",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#렌더는-가상-dom을-계산하고-커밋은-진짜-dom을-변경하는-거-아니에요-라는-대답",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "렌더는 가상 DOM을 계산하고, 커밋은 진짜 DOM을 변경하는 거 아니에요? 라는 대답"]
    }), "\n", _jsx(_components.p, {
      children: "위에서 얘기했던, 왜 반은 틀리고 반은 맞는지 어느정도 느낌이 왔다. 물론 커밋에서 진짜 DOM을 다루고, 렌더에서 가상 DOM을 다루는 것도 맞다. 하지만 왜 그렇게 나누었는지에 대한 근거가 없기 때문에 반은 틀리다고 하는 것이다. 렌더에서 가상 DOM은 몇번이고 재계산이 가능하다. 오히려 그렇게 하라고 리액트에서 단계를 나눈 것이다. 사용자가 서비스를 이용할 때, 버튼을 한 번만 누를까? 버튼만 누를까? 애니메이션도 동작하고, 버튼이나 인풋 작성도 하고, 폼도 전송한다. 여러가지 이벤트가 발생하는데, 이게 동시에 동작할 수도, 혹은 순차적으로, 연속적으로 일어날 수 있다. 그렇기에 가상 DOM은 몇번이고 재계산 할 수 있는 것이다."
    }), "\n", _jsx(_components.p, {
      children: "그러나 진짜 DOM을 건드리게 된다면, 화면은 중단된다. 인풋, 버튼 등 상호작용은 일어나지 않고 사용자는 멈춘 화면을 풀릴 때까지 기다려야 한다. 이런 상태가 수십번 반복되면, 사용자는 사이트 이용을 중단할 것이다."
    }), "\n", _jsx(_components.p, {
      children: "그렇다면, 여기서 리렌더링을 일으키는 setState는 어떨까? setState를 마구 실행/호출하면 리렌더링도 자주 일어나게 될 것이다. 그러나 아무리 setState를 사용해도 리렌더링은 1번만 일어나게 된다."
    }), "\n", _jsxs(_components.h1, {
      id: "setstate는-왜-호출해도-바로-렌더되지-않을까",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#setstate는-왜-호출해도-바로-렌더되지-않을까",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "setState는 왜 호출해도 바로 렌더되지 않을까?"]
    }), "\n", _jsxs(_components.p, {
      children: ["setState를 얼마든지 호출할 수 있다. 개발자가 원하는 곳에 setState를 쓰는 건 당연한 거 아닌가요? setState를 사용하면서, state의 다음 값은 예상해도 “setState 뒤에서는 이런 동작이 일어나겠구나” 생각을 해본 적은 없다. 단순히, 배치 처리가 있어서 바로 적용 되지 않고, ", _jsx(_components.code, {
        children: "setState(state+1)"
      }), " 을 많이 해도 결과값은 ", _jsx(_components.code, {
        children: "1"
      }), " 라는 생각만 했다. 리액트 설계에 맞게 더 딥하게 뛰어들어가보자."]
    }), "\n", _jsxs(_components.h3, {
      id: "왜-setstatestate1-와-setstateprev--prev1-를-나누어-놨을까",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#왜-setstatestate1-와-setstateprev--prev1-를-나누어-놨을까",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "왜 ", _jsx(_components.code, {
        children: "setState(state+1)"
      }), " 와 ", _jsx(_components.code, {
        children: "setState(prev => prev+1)"
      }), " 를 나누어 놨을까?"]
    }), "\n", _jsxs(_components.p, {
      children: ["무지한 상태에서 가장 처음 들었던 의문은 위의 질문이었다. 왜 나누었을까? 의도가 있어서 이런 동작 과정을 나눈 걸까? ", _jsx("u", {
        children: "어떤 이점이 있기에 렌더 시점의 스냅샷 상태(memoizedState)와 이전 상태를 기반으로 한 즉각 변경되는 상태(baseState)가 존재할까?"
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
              children: ","
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
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 기본적인 state 훅"
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
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state "
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
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 고정된 값으로 아무리 호출해도 결과값은 1이다."
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
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "prev"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
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
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "prev"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
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
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "prev"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
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
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 업데이트한 이전 상태값을 따라간다."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 결과값은 3이 된다."
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "리액트가 어떠한 의도를 가지고 나누어놓았다기 보단, 트레이드 오프로 얻게된 결과라고 봐야 한다고 생각한다. 불변성도 지켜야 했고, 변경된 상태값도 알아야했다. 그러다보니 생겨난 결과인데, 이를 더 자세히 알아보기 위해서는 리액트가 생겨난 시작점까지 되돌아가야한다."
    }), "\n", _jsxs(_components.h2, {
      id: "리액트의-시작점-상태가-이-모양이니-ui가-이-모양이지",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트의-시작점-상태가-이-모양이니-ui가-이-모양이지",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트의 시작점: 상태가 이 모양이니 UI가 이 모양이지!"]
    }), "\n", _jsxs(_components.h3, {
      id: "순수-함수인-컴포넌트",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#순수-함수인-컴포넌트",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "순수 함수인 컴포넌트"]
    }), "\n", _jsx(_components.p, {
      children: "리액트는 2013년도에 시작되었다. 이때는 fiber 구조도 아니었고, 동기적 렌더링을 사용했다. 또한 함수를 사용해 UI를 표현했는데, 이는 순수 함수를 이용하고자 했기 때문이다. 동일한 입력에 동일한 출력이 나오기 때문에, 화면 UI를 디버깅할 필요가 없다. 상태만 확인하면 되고, 이는 상태 → UI의 단방향 흐름이었다. 또, 함수는 무언가를 반환할 수 있다. 여기서 UI를 함수로 만들어 반환(JSX)하게 되면, 해당 컴포넌트만 가지고 이전 컴포넌트(실제 DOM)와 비교할 수 있는 것이다. 또한, 함수는 얼마든지 쪼개고 함수를 반환할 수도 있다. 이를 사용해 UI를 세밀하게 쪼개고, 컴포넌트 안에서 컴포넌트를 반환할 수 있었다."
    }), "\n", _jsxs(_components.h2, {
      id: "과거한-번-시작하면-끝을-봐야-했던-동기적-렌더링",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#과거한-번-시작하면-끝을-봐야-했던-동기적-렌더링",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "과거:“한 번 시작하면 끝을 봐야 했던” 동기적 렌더링"]
    }), "\n", _jsx(_components.p, {
      children: "Fiber가 도입되기 전의 리액트는 스택Stack 기반의 렌더링을 사용했다. 자료 구조인 바로 그 스택 말이다. 나중에 들어온 것이 먼저 나가게 되는, 스택 기반의 렌더링. 이런 기반의 렌더링은 중단이 불가능했다."
    }), "\n", _jsx(_components.p, {
      children: "지하철처럼, 종점까지 운행해야 하고, 기관사는 도중에 하차할 수 없다. 컴포넌트의 트리가 아무리 깊고 복잡해도, 리액트가 모든 트리를 계산할 때까지 브라우저는 제어권을 가질 수 없었다. 이러한 과정에서 사용자는 인풋창에 타이핑을 하거나 버튼을 눌러도, 브라우저는 그 이벤트를 처리하지 못하고 얼어있는 현상이 발생했다. 즉, 10,000개의 리스트를 그려야 한다면 10,000개의 리스트를 전부 계산하기 전까지는 화면에 어떤 것도 나타나지 않는 것이다. (끝을 봐야만 했던…)"
    }), "\n", _jsxs(_components.h3, {
      id: "현재-눈치-보며-일하는-동시성-렌더링-fiber",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#현재-눈치-보며-일하는-동시성-렌더링-fiber",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "현재: \"눈치 보며 일하는\" 동시성 렌더링 (Fiber)"]
    }), "\n", _jsx(_components.p, {
      children: "2017년, 모바일 웹 성능이 중요해지고, 사용자 입력이 막히게 되자 리액트는 이러한 문제를 해결하고자 했다. Vue와는 다른 방법을 선택했는데, 여기서 나오는 것이 리액트의 설계 철학이다. 언제든 중단 가능하도록 만드는 것, 그리고 재계산하는 것."
    }), "\n", _jsx(_components.p, {
      children: "생각해보자. Fiber 아키텍처를 도입하기 전까지, 리액트는 UI라는 컴포넌트 함수를 실행했다. 변화가 일어나면, 함수를 재실행하는 것으로 해결했는데, 이러한 방식이 저사양 모바일 환경에서 화면을 멈추게 만들었다. 함수를 실행하게 되면, 멈출 수 없고, 이때문에 사용자 입력이 막히게 된다. 함수 실행을 멈출 수 없으니, 작업을 잘게 쪼개서 실행하되 사용자 입력이라는 이벤트가 있다면, 제어권을 브라우저에게 넘기는 식의 뺏고 뺏는 방식을 채택한 것이다. 즉, 최고의 성능보다는 사용자 경험을 우선시 한 것이다."
    }), "\n", _jsx(_components.p, {
      children: "그렇지만, 한번 생각해보자. 제어권을 브라우저에게 넘기는 건 좋다. 그러면, 다시 돌아와서 함수를 실행한다. 처음부터 다시 실행하게 되면, 리액트는 평생 마운트되지 않을 것이다."
    }), "\n", _jsxs(_components.h3, {
      id: "제어권을-뺏고-뺏기는-관계",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#제어권을-뺏고-뺏기는-관계",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "제어권을 뺏고 뺏기는 관계"]
    }), "\n", _jsx(_components.p, {
      children: "리액트는 브라우저의 눈치를 보게 되었다. 바로 뒷자리에 앉아있는 부장님의 눈치를 보는 것처럼, 렌더링을 하다가도 부장님의 부름에 응답한다. 사용자 입력을 처리해야 하는 일이 생기면, 하던 일을 멈추고 제어권을 브라우저에게 넘겨주는 것이다."
    }), "\n", _jsx(_components.p, {
      children: "그러나 부장님의 부름에서 다시 자리로 돌아왔을 때, 하던 일의 마지막을 기억해낼 수 있을까? 또, 부장님의 부름이 얼마나 시급한 일인지, 내가 알 수 있을까? 내가 떠난 자리는, 그대로 남겨져 있을까? 리액트는 작업을 쪼개고 멈췄다 돌아오기 위해, 데이터를 불변하게 만들고, 작업에 우선 순위를 매겼다. 또한, 멈췄다 돌아오면 처음부터 시작하는 것이 아닌 멈췄던 지점부터 다시 계산을 이어나간다."
    }), "\n", _jsxs(_components.h3, {
      id: "내가-state를-어디까지-계산했더라",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#내가-state를-어디까지-계산했더라",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "내가 state를 어디까지 계산했더라…?"]
    }), "\n", _jsx(_components.p, {
      children: "외출 전과 외출 후에는 정보에 의거하여 절차를 수행한다. 이를테면, 외출하기 전에는 향수를 뿌리거나 차키, 카드, 지갑 등 물건의 원래 장소를 떠올리며 챙기게 된다. 돌아오고 나서는 물건을 원래 있던 장소에 놔둔다. 그런데, 집에 돌아오고, 새로운 물건이 생기게 되면 어떨까? 혹은 있었던 물건이 사라진 것이다. 공포에 질려 비명을 지를지도 모른다…"
    }), "\n", _jsxs(_components.p, {
      children: ["이렇듯, 제어권을 넘겨받고 다시 돌아왔을 때, 데이터가 변화해있다면, 리액트는 어디서부터 작업을 실행해야 할 지 알 수 없다. 그래서 현재 렌더링의 ", _jsx(_components.code, {
        children: "state"
      }), " 스냅샷을 보존한다. 이 ", _jsx(_components.code, {
        children: "state"
      }), "의 값이 ", _jsx(_components.code, {
        children: "memoizedState"
      }), "이다."]
    }), "\n", _jsxs(_components.p, {
      children: ["그럼, 반대로 현재 렌더링의 상태값은 변화하지 않으니 알겠지만… ", _jsx(_components.code, {
        children: "setState(state + 1)"
      }), " 를 무차별 남용하여, 실행해본다고 가정하자. 현재 렌더는 변화하지 않는다, 따라서 set을 하더라도 동일한 상태값을 쳐다보는데, 어떻게 다음 렌더의 상태값을 계산할까? 여기서 변수가 하나 더 나오게 된다. ", _jsx(_components.code, {
        children: "baseState"
      }), " 이다."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "baseState"
      }), " 는 현재까지 작업한 상태값이다. ", _jsx(_components.code, {
        children: "prev=> prev+1"
      }), " 할 때 사용하는 그 값이 맞다. 큐에 저장된 업데이트 동작들을 기억해두고, 실행할 때 ", _jsx(_components.code, {
        children: "baseState"
      }), " 와 계산하게 된다. ", _jsx(_components.code, {
        children: "baseState"
      }), " + 업데이트 큐 = 다음 렌더의 ", _jsx(_components.code, {
        children: "memoizedState"
      }), " 이다. 즉, 브라우저에게 제어권을 넘기고 돌아왔을 때, baseState에 다음 업데이트 큐 작업을 실행하면 되는 것이다."]
    }), "\n", _jsxs(_components.h2, {
      id: "진짜-이것만-해주세요-최최종",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#진짜-이것만-해주세요-최최종",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "진짜 이것만 해주세요. 최최종."]
    }), "\n", _jsxs(_components.p, {
      children: ["그렇다면, 브라우저에게 제어권을 건넨다는 게 무슨 의미일까? 리액트는 사용자 입력이 막히는 걸 우려했다. 그래서 모든 작업에 등급을 매겨, 사용자 입력(타이핑 등)과 같은 긴급한 이벤트가 들어오면 하던 일을 내팽개치고 그것부터 처리한다. ", _jsx("u", {
        children: "자, 그럼 긴급한 이벤트란 무엇일까?"
      })]
    }), "\n", _jsx(_components.p, {
      children: "앞서, 긴급한 이벤트는 사용자 입력이라고 설명했었다. 그렇지만 사용자 이벤트는 굉장히 여러가지가 있다. 클릭, enter, over, keydown, touch, scroll… 등등 이 많은 이벤트가 리액트의 작업을 중단시키는 걸까?"
    }), "\n", _jsxs(_components.h3, {
      id: "리액트의-이벤트-우선순위-단계",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트의-이벤트-우선순위-단계",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트의 이벤트 우선순위 단계"]
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
              children: "<-"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 높은 우선순위    낮은 우선순위 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "이산형 이벤트 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 연속형 이벤트 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 기본 이벤트"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "DiscreteEventPriority (이산형 이벤트)"
          })
        }), "\n", _jsx(_components.p, {
          children: "클릭, 키다운, 포커스와 같이 명확한 의도를 가진 사용자 동작을 의미한다. 사용자가 즉각적인 반응을 기대하기 때문에 가장 빠르게 처리되고, 때문에 리액트의 업데이트가 중단될 수 있다."
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "ContinuousEventPriority (연속형 이벤트)"
          })
        }), "\n", _jsx(_components.p, {
          children: "스크롤, 마우스 이동, 드래그 등 짧은 시간내에 연속적으로 발생하는 사용자 동작이다. 중요하지만, 모든 과정을 다 그릴 필요가 없어, 여러 업데이트를 하나로 합쳐서 처리하기도 한다."
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "DefaultEventPriority (기본 이벤트)"
          })
        }), "\n", _jsx(_components.p, {
          children: "네트워크 요청 응답, 타이머 등 직접적인 사용자 인터랙션이 아닌 경우에 해당한다. 상대적으로 시급함이 낮아 나중에 처리된다."
        }), "\n"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["이게 Lanes 우선순위이다. 모든 작업에 등급을 매겨, 바로 실행한다. 놀이공원의 매직패스권 같은 것이다. 하나의 어트랙션을 타기 위해, 줄을 2시간동안 서있는다고 생각해보자. 근데 여기서 매직패스권을 산 사람이 2시간을 기다리지 않고 도중에 들어가버린다. 시급한 이벤트이기 때문이다. ", _jsx(_components.del, {
        children: "(실제로는 그냥 돈을 써서 시간을 산 사람이지만)"
      }), " 그리고 직원은 기다리고 있던 사람들의 입장을 마저 도와준다. 어디까지 끊었는지 ", _jsx(_components.strong, {
        children: "기억"
      }), " 하기 때문이다."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "여기서 매직패스권을 사용한 어트랙션에서만 바로 입장할 수 있다는 점을 놓치면 안된다."
      })
    }), "\n", _jsx(_components.p, {
      children: "즉, 클릭이라는 시급한 이벤트가 발생하면, 업데이트를 중단하고, 클릭 이벤트에 바인딩 되어있는 함수를 실행하게 된다(바인딩 되어 있다고 가정) 그리고 그 함수 내부에는 setState가 여러개 있고, 유틸 함수도 존재한다. 리액트는 하나의 실행컨텍스트, 여기서는 클릭 이벤트와 바인딩된 함수이다. 이 함수 내부에 있는 코드를 배치 처리한다. 이를테면 여러개의 setState를 다음 렌더에서 모두 업데이트 한다는 뜻이다. 렌더는 1번만 일어나게 된다. (18버전)"
    }), "\n", _jsxs(_components.h2, {
      id: "작은-리액트인-usetransition",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#작은-리액트인-usetransition",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "작은 리액트인 useTransition"]
    }), "\n", _jsx(_components.p, {
      children: "나는 useTransition을 작은 리액트라고 이름 붙이고 싶다. 둘의 철학이 닮았기 때문이다."
    }), "\n", _jsx(_components.p, {
      children: "앞서 리액트는 모든 작업에 Lane이라는 등급을 매긴다고 설명했다. 그렇다면, 개발자가 직접 등급을 조정할 수 있을까? 그게 바로 useTransition이다."
    }), "\n", _jsx(_components.p, {
      children: "예를 들어, 검색창에 타이핑할 때 결과 목록이 많으면 입력이 버벅이는 경우가 있다. 이때 목록 업데이트를 startTransition으로 감싸면, 입력(SyncLane)이 목록 렌더(DefaultLane)보다 항상 먼저 처리된다. 놀이공원에 있는 안내 데스크에서 매직 패스권을 직접 발급하는 것이다."
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
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "isPending"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "startTransition"
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
              children: " useTransition"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
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
              children: "startTransition"
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
              children: "  setSearchResults"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(results); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// DefaultLane으로 강제 태깅"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "});"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "useTransition은 평소에 큰 차이가 없지만, 대규모 데이터를 불러오거나 기기가 느려지는 등의 상황에서 입력창이 얼어붙는 것을 방지한다. 리액트가 내부적으로 하는 일을 개발자가 직접 매직패스권을 제출하면서 힌트로 줄 수 있는 것이다."
    }), "\n", _jsxs(_components.h2, {
      id: "리액트는-어떻게-우선순위를-기억할까",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트는-어떻게-우선순위를-기억할까",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트는 어떻게 우선순위를 기억할까?"]
    }), "\n", _jsx(_components.p, {
      children: "시급한 이벤트라는 건, 알겠지만 직원은 손님이 매직패스권을 구매했다는 걸 어떻게 인지하고 있을까? 손목에 둘러주는 종이 팔찌 같은 태깅 처리를 이용해 알아본다. 리액트는 업데이트 큐에 있는 모든 lane을 OR로 합산한 값을 들고 있다. renderLane와 겹치는 것이 있다면, 링크드 리스트를 순회하며 필터링하는데 여기서 비트 연산을 시도한다. 우선 처리될 이벤트인지 알아보는 작업이다."
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
                color: "#F69D50"
              },
              children: "updateQueue"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "A"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(DefaultLane)] → ["
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "B"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(SyncLane)] → ["
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "C"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(DefaultLane)]"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "SyncLane 렌더 시작"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ↓"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "A"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 건너뜀 → "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "B"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 처리 → "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "C"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 건너뜀"
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
              children: "다음 "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "렌더"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (DefaultLane)"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ↓"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "A"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 처리 → "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "C"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 처리"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "B가 A보다 먼저 처리됐을 때, C가 A의 결과에 의존한다면 잘못된 값으로 렌더될 수 있다. React는 Lane 우선순위만 알 뿐, 업데이트 간 의존성은 알지 못하기 때문이다. 이런 케이스는 설계 단계에서 의존성이 생기지 않도록 구조를 짜야 한다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.h3, {
        id: "-연속된-이벤트-처리는-어떻게-될까",
        children: [_jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#-연속된-이벤트-처리는-어떻게-될까",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        }), "💡 연속된 이벤트 처리는 어떻게 될까?"]
      }), "\n", _jsx(_components.p, {
        children: "여러번 반복되는 이벤트, 예를들어 스크롤, 드래그, 마우스 이동 같은 이벤트들의 로그를 찍어보면 개발자도구 UI는 순식간에 꽉 차는 걸 볼 수 있다. 이 많은 이벤트들이 발생할 때마다 코드를 실행하게 되는 걸까? 그랬다면, 리액트는 비행기가 이륙하는 소리를 내며, 하늘을 날았을 것이다."
      }), "\n", _jsx(_components.p, {
        children: "리액트는 중간 과정을 생략한다. 우리가 보는 로그들은 중간과정이 생략된 로그들인 것이다. 연속 이벤트가 발생할 때, React는 두 가지 방식으로 처리를 줄인다. 첫째, 브라우저가 자체적으로 mousemove 같은 이벤트를 페인트 주기에 맞춰 합쳐주는 coalescing이 일어난다. 둘째, React의 배치 처리가 그 위에서 동작하며 같은 컨텍스트 안의 업데이트를 하나의 렌더로 묶는다. 우리가 보는 로그가 적은 건, 이 두 레이어가 함께 동작하기 때문이다."
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
      id: "리액트가-비트-연산을-쓰는-이유",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트가-비트-연산을-쓰는-이유",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트가 비트 연산을 쓰는 이유"]
    }), "\n", _jsxs(_components.p, {
      children: ["JavaScript, TypeScript가 아닌 비트 연산을 사용하는 이유는 무엇일까? 우선, JavaScript는 기계어가 아니고 ", _jsx(_components.strong, {
        children: "경량 인터프리터 방식(또는 JIT 컴파일 방식) 프로그래밍 언어"
      }), "이다. 쉽게 말해, 코드를 한줄씩 실행하면서 해석할 수 있고, 실행 시점에 기계어로 변환해주는 것이다. 즉, JavaScript는 사람이 알기 쉽도록 만들어진 언어라서 실제 기계어와는 거리가 멀다."]
    }), "\n", _jsx(_components.p, {
      children: "우리가 해외에 나가 번역기를 사용하는 것과 동일한데, 이 과정에서 번역하는 시간이 흐른다. 번역을 하지 않고, 해당 나라의 언어를 사용하면 빠르게 해석할 수 있다. 리액트는 이런 관점에서 비트 연산을 고른 것이다. 빠르니까."
    }), "\n", _jsx(_components.p, {
      children: "JavaScript를 사용했다면, 그만큼 해석하는 것에 시간이 걸리고 일반적인 배열을 순회하는 것보다 이진수를 통해 계산을 빠르고 쉽게 끝낼 수 있다. (기계 친화적인 언어일 수록 빠르지만 어렵다… 예시로 C언어가 있고 자바스크립트는 C언어로 만들어졌다. )"
    }), "\n", _jsxs(_components.h3, {
      id: "예시-렌더링-도중-타이핑-이벤트가-들어온다면",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#예시-렌더링-도중-타이핑-이벤트가-들어온다면",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "예시: 렌더링 도중 타이핑 이벤트가 들어온다면?"]
    }), "\n", _jsx(_components.p, {
      children: "리액트의 비트 연산은 더하고, 추출하고 빼버리는 과정을 거친다. 간단히 말해 들어오는 작업을 모두 더하고, 그 중에서 등급이 높은 녀석부터 처리한다. 그리고 작업 목록에서 빼버리는 것이다. 비트 연산은 스위치처럼 생각하면 쉽다. 0과 1의 스위치만 존재한다."
    }), "\n", _jsx(_components.p, {
      children: "가장 시급한 SyncLane의 값은 0b001이다. 평범한 상태 업데이트인 DefaultLane의 값은 0b010 인데, 상태 업데이트 도중 시급한 요청이 들어온다고 가정해보자."
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
                color: "#6CB6FF"
              },
              children: "0b010"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (DefaultLane)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0b001"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (SyncLane)"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "--------"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0b011"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0b010"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0b001"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0b011"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // | OR 연산자를 통해 더한다."
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["식당에 들어선 모든 사람의 주문을 받아 주방에 걸어놓는다. 그런데 여기서 포장 주문도 포함되어있다. 포장 주문은 식당에서 먹고가는 사람보다 먼저 나와야 한다. 그래서 시급한 주문부터 선별하는 것이다. 이때 비트 트릭인 ", _jsx(_components.code, {
        children: "Bit Trick: lanes & -lanes"
      }), "를 사용한다."]
    }), "\n", _jsx(_components.p, {
      children: "여기서 & 연산은 Lane 중에서 특정 비트가 속해있는지 알 수 있다. 비트 트릭은 - 음수를 통해 이진수를 반전시키는 트릭을 이용한 것이다.  컴퓨터는 음수가 들어오면 모든 0을 1로, 1을 0으로 반전시킨다. 그리고 앞서 결과에서 1을 더하는데, 그런 과정을 거치면 아래의 결과가 나오게 된다."
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
              children: "// 1. 원래의 값을 8비트로 "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0b011"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ->"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0000"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0011"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 8비트"
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
              children: "// 2. 마이너스 값을 만들기"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0b011"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ->"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0000"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0011"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ->"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1111"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1100"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ->"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 더하기 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1111"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1101"
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
              children: "// 3. & AND 연산하기"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0000"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0011"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1111"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1101"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "---------"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0000"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0001"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // 0b001"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0b011"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " &"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0b011"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0b001"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // SyncLane!"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "계산한 결과로 제일 시급한 등급이 나온다.  리액트는 이 트릭을 써서 여러 작업이 섞여 있을 때, 가장 오른쪽의 시급한 비트만 쏙 뽑아내는 것이다. 즉, 선별한 포장 주문의 작업부터 우선하게 된다."
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
        children: _jsx(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "pendingLanes "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "&="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ~"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "SyncLane"
            })]
          })
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "작업이 종료하면, ~ 연산을 통해 해당 작업 등급을 제거한다. 주문 목록에서 포장 주문을 제거하는 것과 동일하다. 이제 주문 목록에는 미뤄뒀던 먹고 가는 손님들의 주문만 남게 된다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["💡 ", _jsx(_components.code, {
          children: "&"
        }), " 만 사용해서는 해당 비트가 포함되어 있는지만 확인할 수 있고, 가장 우선순위가 높은 녀석이 누구인지는 알 수 없기 때문에 비트 트릭을 이용하는 것이다. 비트 트릭을 이용하면, 주문 목록에 1개든 10개든 상관없이 가장 시급한 녀석인 1만 남기고 싹 다 0으로 밀어버린다."]
      }), "\n", _jsxs(_components.ol, {
        children: ["\n", _jsxs(_components.li, {
          children: ["\n", _jsx(_components.p, {
            children: "OR: 모든 손님의 주문 목록을 가져와!"
          }), "\n"]
        }), "\n", _jsxs(_components.li, {
          children: ["\n", _jsx(_components.p, {
            children: "Bit Trick: 가장 시급한 녀석이 누군지 데려와!"
          }), "\n"]
        }), "\n", _jsxs(_components.li, {
          children: ["\n", _jsx(_components.p, {
            children: "AND NOT: 포장 주문 끝냈으니까 주문서 제거해!"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
      id: "그래서-비트-연산을-사용하는-결론은",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#그래서-비트-연산을-사용하는-결론은",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "그래서 비트 연산을 사용하는 결론은…"]
    }), "\n", _jsx(_components.p, {
      children: "앞서 빠르다는 관점에서 비트 연산을 골랐다고 설명했는데, 비트 연산만 가지고 논의한다면 나노초 단위로 굉장히 빠르다. 거의 무시해도 좋을 수준이지만, 실행하는 주체가 JS 엔진이라는 점이다. JS 엔진은 비트 연산보다 빠르지 않다. 그래서 실제 체감은 ns보다 훨씬 큰 비용이 들어간다. 그래도 “빠르다”라고 말하는 이유는 절대 시간보다 상대 비용이기 때문이다."
    }), "\n", _jsx(_components.p, {
      children: "비트 연산 자체는 거의 0에 가까운 수준의 시간이 소요된다. 그에 반해 객체 생성, 배열 순회, DOM 접근, 렌더링 같은 동작들은 상대적으로 시간 소요가 커진다. 그래서 비트 연산은 그냥 무시해도 가능한 수준이 된다. 병목이 될 수 없는 구조이기 때문에 선택한 것이다. (비용이 거의 들지 않음) 따라서 사용자는 데이터 로딩 중에도 끊김 없이 글자를 입력할 수 있다."
    }), "\n", _jsxs(_components.h2, {
      id: "렌더-중에-setstate를-써도-무한루프가-생기지-않는-이유",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#렌더-중에-setstate를-써도-무한루프가-생기지-않는-이유",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "렌더 중에 setState를 써도 무한루프가 생기지 않는 이유"]
    }), "\n", _jsx(_components.p, {
      children: "리액트에는 실행 컨텍스트가 있다. 브라우저의 실행 컨텍스트와는 다른 일을 하는데, 현재 단계가 렌더인지 커밋인지를 추적하려고 만든 숫자 변수이다. 그리고 이 컨텍스트 때문에 렌더 중에 setState를 사용해도 무한 루프가 생기지 않는다. 쉽게 비유해보자."
    }), "\n", _jsx(_components.p, {
      children: "마트에 구매할 것이 생겼다. 초콜릿, 과자, 라면 등등 잊지 않기 위해 리스트(업데이트 큐)를 작성한다. 도중에 새로 구매할 것(setState 호출)이 생겨도 리스트에 항목만 추가하거나 삭제하면 된다. (바로 마트에 가지 않음) 이게 RenderContext가 켜진 것이다. 리스트 작성이 끝나야 마트로 떠날 수 있기 때문에 무한 루프가 생기지 않는다. (구매 항목마다 마트로 떠나는 삽질은 하지 않아도 된다… 하루에 마트 20번 가는 것도 웃기겠다만.)"
    }), "\n", _jsx(_components.p, {
      children: "다시 정리해보자. 리액트의 executionContext가 RenderContext라면, setState가 호출되어도 업데이트 큐에 저장된다. 바로 실행하지 않아 리렌더링이 일어나지 않는다. 따라서 무한 루프가 생기지 않는다. 이후 배치 처리에 의해 렌더 단계에서 1번만 실행되는 것이다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.h3, {
        id: "-uselayouteffect에서-setstate를-호출하면-렌더링이-두-번-실행되는-까닭",
        children: [_jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#-uselayouteffect에서-setstate를-호출하면-렌더링이-두-번-실행되는-까닭",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        }), "💡 useLayoutEffect에서 setState를 호출하면 렌더링이 두 번 실행되는 까닭."]
      }), "\n", _jsx(_components.p, {
        children: "executionContext와 관련이 있는 내용이다. useLayoutEffect은 CommitContext 커밋 단계(커밋 단계의 마지막)이다. 여기서 setState를 호출하면, 업데이트 큐에 들어가는 것은 똑같지만, 즉시 렌더가 되면서 두 번 렌더링이 일어난다. 페인트 전에 두 번째 렌더로 덮어씌워지므로 사용자는 마지막 렌더의 결과만 확인할 수 있다."
      }), "\n", _jsx(_components.p, {
        children: "쉽게 말하자면, 이미 마트에 도착한 상태로 물건을 구입하다가 “아, 이것도 사야겠다” 새로 구매할 목록이 생겨서 리스트를 수정하게 되고 바로 집어서 구매하는 느낌이다."
      }), "\n", _jsx(_components.p, {
        children: "렌더가 두 번 일어나기 때문에, useLayoutEffect에서의 setState 호출은 유의해야한다. DOM 측정과 관련된, 꼭 필요한 경우에만 사용하는 것이 좋다."
      }), "\n"]
    }), "\n", _jsxs(_components.h1, {
      id: "useeffect가-두-번-실행되는-이유",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#useeffect가-두-번-실행되는-이유",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useEffect가 두 번 실행되는 이유"]
    }), "\n", _jsxs(_components.p, {
      children: ["단순히 StrictMode가 켜져있으니까 두 번 도는 게 아닐까요? 라고 생각할 수 있다. 나도 자세히 알아보기 전까지는 그냥 그런 줄로만 알고 공부할 생각을 하지 않았었다.", _jsx(_components.br, {}), "\n", "useEffect가 실행될 때에는 클린업 함수부터 실행된다. 클린업 함수는 타이머, 구독 등 이전에 실행된 사이드이펙트를 정리하는 역할을 한다. 그렇다면 왜 클린업이 필요한 걸까?"]
    }), "\n", _jsxs(_components.p, {
      children: ["앞서 알아봤듯이 리액트는 언제든 렌더를 중단하고 재실행할 수 있다. useEffect는 외부 세계와 소통하는 훅으로, API 호출, 타이머 등 비동기적 동작을 담당한다. ", _jsx("u", {
        children: _jsx(_components.em, {
          children: _jsx(_components.strong, {
            children: "문제는 이런 동작들은 한 번 시작되면 중간에 멈출 수 없다는 것이다."
          })
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: "클린업 되지 않은 useEffect가 쌓이면 타이머는 백그라운드에서 계속 돌아가고, 이전 API 응답이 뒤늦게 도착해 현재 상태값을 덮어버리는 문제가 생긴다. 이것이 메모리 누수로 이어진다."
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
              children: "render "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "A"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "→ effect 실행"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "→ render "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "B"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 시작"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "→ "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "A"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " effect 클린업 → "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "B"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " effect 실행"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "그래서 리액트는 클린업이 올바르게 구현됐는지 검증하기 위해, 개발 모드에서 의도적으로 mount → 클린업 → 재mount 순서로 두 번 돌리게 만들었다. StrictMode는 이런 환경을 강제로 만들어 안전한 코드만 통과시키도록 구현한 것이다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["💡 API 통신을 할 때 의도적으로 중단시킬 수 있다.", _jsx(_components.br, {}), "\n", _jsx(_components.a, {
          href: "https://developer.mozilla.org/ko/docs/Web/API/AbortController",
          children: "AbortController"
        }), " 인터페이스 생성하여 abort() 메서드를 통해 통신을 취소할 수 있다."]
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
                children: " controller"
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " AbortController"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "();  "
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
                  color: "#DCBDFB"
                },
                children: "fetch"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(url, { signal: controller.signal })  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "response"
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " response."
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "json"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "())  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "e"
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {  "
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
                children: " (e.name "
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), _jsx(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'AbortError'"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "return"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; "
              }), _jsx(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// 중단된 요청 무시  "
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  });  "
              })
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
                children: "// 클린업에서 호출  "
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "return"
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
                children: " controller."
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "abort"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "();  "
              })]
            })]
          })
        })
      }), "\n"]
    }), "\n", _jsxs(_components.h1, {
      id: "마지막으로",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#마지막으로",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "마지막으로"]
    }), "\n", _jsxs(_components.h3, {
      id: "react-vsvue-누가-더-강할까",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#react-vsvue-누가-더-강할까",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "React vs.Vue 누가 더 강할까?"]
    }), "\n", _jsx(_components.p, {
      children: "React는 동시성을 활용해 언제든 사용자 입력을 받고, 업데이트한다. 중단과 재실행의 유연적인 설계를 선택한 것이다. 그에 반해 Vue는 프록시를 통해 변경하려는 요소 하나만을 추적한다. 그리고 작업을 최소화하여 미친듯이 달린다. 가장 빠르게 작업을 완료하는 것이다."
    }), "\n", _jsx(_components.p, {
      children: "비유하자면… React는 여러개의 활주로가 뻗어있고, 이를 관제탑에서 통제한다. 비행기가 이착륙하는 모든 작업이 스케줄되어있다. 그에 반해, Vue는 각 비행기에 GPS를 달아서 경로가 바뀌면, 그 비행기만 즉시 재경로를 설정한다. 스케줄로 세밀하게 컨트롤하기보단 무조건 빠르게, 최적화해서 날리는 것이 목적인 것이다. (폭주기관차)"
    }), "\n", _jsx(_components.p, {
      children: "결론적으로 리액트나 뷰나 각자의 장단점이 있고, 개발자가 상황에 맞춰 사용하는 것이 좋다. (개인 프로젝트에서는 취향에 따라서도 갈릴 듯...) 리액트가 커스텀 훅으로 해결한 것처럼 Vue3에서는 Composition API로 기능을 함수로 분리하여 재사용 가능하도록 만들었다. 따라서 둘 다 대규모 프로젝트에서 사용 가능하게 되었으나, 커뮤니티 크기 자체는 리액트가 압도적으로 크다. 그러나 개발을 할 때, Vue는 반응형 추적을 자체적으로 처리해줘서 개발자가 최적화에 덜 신경써도 되는 편이다. 그냥 개발자는 팀에서 쓰는 스택을 써야 하는 게 맞는 듯 싶다... 혼자 개발을 한다면 커뮤니티가 넓은 React가 맞을 수도 있고, 스타트를 빨리 끊어야 한다면 Vue를 사용하는 것도 괜찮을 것 같다. 나는 Vue2를 써봤는데, 문제가 생겼을 때 검색을 해봐도 온통 React 관련 문서만 나와 속으로 울었던 경험이 있다… 지금은 어떨지 모르겠지만, 그 경험 이후로 커뮤니티 크기를 꽤 중요하게 생각하게 됐다."
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
