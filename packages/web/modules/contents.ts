import {range} from '@/utils/common'

export const COLOR_SET = [
  '#7cb2ff',
  '#4dffff',
  '#9ac78b',
  '#80f1b0',
  '#ff1344',
  '#ffb24a',
  '#3c00ff',
]

const meta = [
  [
    3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 5, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 14, 3, 1, 2, 2, 1,
    1, 7, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 1, 1, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 10, 1, 1, 1, 5, 1, 1, 2, 9,
    3, 3, 2, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 3, 1, 1,
    3, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 2, 2, 1, 3, 1, 2, 1, 1, 2,
    6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 11, 2, 2, 1, 5, 1, 1, 1, 1, 2, 3, 3, 1, 1, 1, 17, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 7, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14,
    1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 1, 1, 1, 1,
  ],
  357,
  86,
  [13, 29, 29, 12, 14, 15, 15, 2, 11, 6, 12, 23, 17, 10, 9, 10, 20, 12, 7, 8, 8, 1],
  [13, 21, 28, 13, 6, 16, 5],
  [13, 44],
  11,
  18,
]

const getImagesData = (index: number) => {
  const item = meta[index]

  if (Array.isArray(item)) {
    return range(0, item.length - 1).map((i) => {
      return range(0, item[i] - 1).map((j) => {
        return {
          url: `https://df87wl86xwmoj.cloudfront.net/contents/0${index}/0${i}/0${j}.jpg`,
        }
      })
    })
  }

  return range(0, item - 1).map((i) => {
    return {
      url: `https://df87wl86xwmoj.cloudfront.net/contents/0${index}/0${i}.jpg`,
    }
  })
}

export const CONTENTS = [
  {
    title: '2005-2022 도깨비',
    desc: '2005년 5월 14일 개장한 도깨비 공원에는 1,000여 점의 도깨비들이 살고 있습니다. 제주민속설화를 바탕으로 재탄생 된 다양한 모습의 도깨비는 6,000평 크기의 공원에 종족별로 흩어져있습니다. 수작업으로 만들어진 각각의 도깨비는 와이어 패널 공법을 도입하여 철골로 구조를 만든 후 시멘트로 형태를 구체화하였습니다. 질감은 제주도의 현무암처럼 거칠지만 단단한 느낌을 줍니다. 형형색색의 다양한 색감의 도깨비가 드넓은 풀밭 그리고 수만 그루의 나무와 조화롭게 공존합니다. 2005-2022 도깨비 컬렉션은 도깨비 종족과 그들의 구역 순으로 나열돼있습니다. 한 도깨비의 과거와 현재의 모습을 확인할 수 있습니다.',
    images: getImagesData(0),
    color: COLOR_SET[0],
  },
  {
    title: '초기 스케치자료',
    desc: '도깨비공원의 영원한 대장인 이기후 교수와 공원 조성에 함께 참여한 사람들의 초기 스케치입니다. 이기후 교수는 1988년 섬문화 축제 조각 공원과 1999년 한라산 눈꽃축제 캐릭터 디자인 및 무대 세트를 제작한 경험을 토대로 도깨비공원을 기획하였습니다. 제주대학교 공과대학 산업디자인학부 교수로 재직하면서 1998년부터 제주의 독특한 자연환경과 정서를 반영하여 손수 공원을 만들었습니다. 2003년 건축물과 중, 대형 조형 제작에 사용될 재료를 다양하게 연구하던 중 와이어 패널 공법을 도입하여 제작하였습니다. 그리하여 상상 속의 캐릭터들이 각종 영상관, 체험관, 타워 등 10개의 건축물과 22개의 대형, 203개의 중형 그리고 1987개의 소형 조형물로 탄생했습니다. 거칠고 빠른 손놀림의 캐릭터 드로잉부터 건물을 위한 스케치까지 다양한 드로잉이 남아있습니다. 도깨비 공원의 시작인 삼몽령, 도깨비 종족의 하나인 오백장군과 느영나영 그리고 제주도의 마스코트 돌하르방까지, 초기 스케치를 통해 도깨비공원의 도깨비들이 탄생할 수 있었던 과정을 살펴볼 수 있습니다.',
    images: getImagesData(1),
  },
  {
    title: '미니조형',
    desc: '도깨비공원 갤러리에는 흙으로 빚은 작은 도깨비 500여 점이 있습니다. 도자 작가 강혜경의 작품으로 도깨비공원을 구상하면서 한 밑 작업이자, 현재 도깨비공원에 존재하는 거대 조형물의 초석이 되었습니다. 대장 도깨비와의 협업을 통해 탄생한 다양한 형태의 아기자기한 도깨비를 볼 수 있습니다. 일부 도깨비는 공원 오픈 후 전시를 위해 만들었습니다.',
    images: getImagesData(2),
  },
  {
    title: '건축물',
    desc: '도깨비공원에는 21개의 건축물이 있습니다. 각각의 건축물은 한 사람을 위한 공간부터 많은 사람들이 영상을 보고 여러 가지 체험을 할 수 있는 공간까지 크기와 모양, 쓰임이 다양합니다. 도깨비 가면을 만들 수 있는 가면체험관, 도깨비 입속으로 들어가는 경험을 할 수 있는 깨뽀 영상관, 세상에서 가장 큰 부적인 돌아봐세바퀴, 눈을 깜빡이며 노래하는 깨슈타인타워 등 모든 건축물은 각각의 이야기와 역사를 갖습니다. 건축물 컬렉션에서는 건축물의 예전 사진과 현재의 모습 그리고 어떠한 목적으로 각 건물이 탄생했는지 살펴볼 수 있습니다.\n',
    // + '\n' +
    // '깨뽀 영상관; 높이 10m가 넘는 가장 큰 도깨비. 입구부터 망아지, 잭, 아구리라는 새 개의 캐릭터를 합체하여 만든 건축물.  ‘아름다운 별이 가득한 환상의 별나라’ 와 ‘돌 도깨비가 살고 있는 무서운 돌나라’라는 제목의 영상 상영. 6개월의 제작 기간 끝에 2003년 개관. \n' +
    // '\n' +
    // '도깨비 숲 전시관; ‘도깨비 숲에서 놀자’라는 테마를 갖고 있는 전시장. 도자 작가 강혜경이 만든 약 500여 개의 미니 흙 도깨비와 자연물을 소재로 만든 다양한 캐릭터가 전시됐으며, 도깨비모자를 쓰고 도깨비 방망이와 함께 다양한 도깨비 포즈를 따라 하며 즐길 수 있었던 체험관. 한 편에서는 도깨비 양초 만들기 체험을 할 수 있었음. \n' +
    // '\n' +
    // '돌아봐세바퀴; 세상에서 가장 큰 부적. 험상궂게 생겼지만 도깨비공원의 정신적 지주. 한 바퀴를 돌면 착한 어린이가 되고, 두 바퀴를 돌면 말 잘 듣는 어린이가 되고, 세바퀴를 돌면 공부 잘하게 된다는 속설이 있음. \n' +
    // '\n' +
    // '무언성; 회의실, 식당, 공구실 등으로 이루어진 6개의 컨테이너 성. 도깨비공원 조성을 위한 각종 기획 회의가 있었고 도깨비 조형물을 만든 도깨비 공장. 오픈 직전에 완성된 건축물로 3일 밤낮을 서로 말없이 마무리하여 말이 없는 성, 즉 무언성으로 명명함.\n' +
    // '\n' +
    // '삼몽령; 도깨비공원의 시작인 삼몽령. 석삼, 꿈몽, 고개령 세 가지 꿈의 고개라는 뜻. 삼몽령에게 간절히 소원을 바라면 이루어 준다는 속설이 있음. 징가숑타워에서 나오는 영상을 위한 스크린 역할을 함.\n' +
    // '\n' +
    // '으시시; 도깨비공원에서 가장 으시시한 곳인 으시시. 가시덤불과 억새로 가득했던 곳. 대장 도깨비가 포크레인 작업 도중 신발 한 짝을 잃어버렸는데 금방 없어진 신발을 아무리 찾아도 찾을 수 없었던 곳. 누군가 보고 있는 것 같기도 하고, 소리가 들리는 것 같기도 하여 고사를 지낸 장소.\n' +
    // '\n' +
    // '땅크기록관; 공사를 하면서 대장 도깨비에게 가장 큰 힘이 된 포크레인을 기념하기 위해 포크레인 모양의 도깨비가 탄생. 도깨비공원이 조성될 때의 과정 사진을 전시함.\n' +
    // '\n' +
    // '깨뽀졸; 매표소. \n' +
    // '\n' +
    // '왕두깨; 앵두깨의 오빠. 도깨비의 보편적 모양을 토대로 하여 탄생한 캐릭터. \n' +
    // '\n' +
    // '대장도깨비기념관; 가장 마지막에 지어진 공간. 대장도깨비의 다음 계획은 돔 형태의 건물이 있는 꽃 도자 공원이었는데, 다음 프로젝트 준비 일환으로 돔 형태의 기념관을 만듦. 내부에 둘러앉아서 같이 이야기를 나눌 수 있는 공간. 대장도깨비가 세상을 떠난 후에는 그를 기리는 기념관이 되었음.\n' +
    // '\n' +
    // '앵두깨; 왕두깨의 여동생. 왕두깨와 마찬가지로 사람들이 보편적으로 알고 있는 도깨비 모양을 토대도 탄생한 캐릭터.\n' +
    // '\n' +
    // '도깨비입구성; 스피커가 달린 조형물이자 건축물. \n' +
    // '\n' +
    // '깨슈타인타워; 야간에도 공원을 운영하기 위해 눈에 조명을 달아서 빛을 내줬던 타워. 아인슈타인을 모티브로 만들어진 똑똑한 도깨비. \n' +
    // '\n' +
    // '깨숑; 징가숑타워에서 탄생한 최초의 도깨비 중 하나. 저세상 순회공연을 마치고 돌아온 노래하는 도깨비. 뽀숑의 남자친구. 도깨비공원의 메인 스피커 역할.\n' +
    // '\n' +
    // '뽀숑; 징가숑타워에서 탄생한 최초의 도깨비 중 하나. 저세상 순회공연을 마치고 돌아온 노래하는 도깨비. 깨숑의 여자친구. 도깨비공원의 메인 스피커 역할.\n' +
    // '\n' +
    // '징가숑타워; 도깨비공원의 수호 도깨비이자 마징가를 닮은 타워. 중심이 되는 타워. 입에서 영상이 나오는 건축물. 도깨비 탄생 설화에 등장하는 최초의 도깨비.\n' +
    // '\n' +
    // '매점깨비; 기념품 판매소.\n' +
    // '\n' +
    // '표사자; 매표소.\n' +
    // '\n' +
    // '화장실; 화장실.\n' +
    // '\n' +
    // '소원방; 소원을 비는 방. 원래는 화장실로 만들어진 공간이나 사이즈가 협소하여 화장실을 따로 만들고 소원방으로 다시 탄생.\n' +
    // '\n' +
    // '가면체험관; 도깨비 가면 만들기 체험 공간.'
    images: getImagesData(3),
  },
  {
    title: '전경',
    desc: '도깨비공원의 옛 전경 사진입니다. 2005년 개장했을 당시의 사진들과 이후 계절의 변화에 따라 시시각각 달라진 공원의 모습을 확인할 수 있습니다. 시간이 지남에 따라 조금씩 색을 잃어가는 모습 혹은 다른 구조물이 덧붙여진 모습 등을 볼 수 있습니다.',
    images: getImagesData(4),
  },
  {
    title: '광고자료 및 브로셔',
    desc: '도깨비공원 개장 후 만든 광고자료 및 브로셔 모음 컬렉션입니다. 제주도에 생긴 1세대 테마파크로 2005년 개장 당시 많은 관심을 받았습니다. 다양한 이색 체험을 할 수 있고 아이들뿐만 아니라 어른들도 함께 즐길 수 있는 디자인 공원으로 홍보되어 제주도의 대표적 관광명소로 자리 잡았습니다. 또한 지역민에 의해 만들어져 제주도 관광개발의 표본이 되기도 하였습니다. 한 인터뷰에서 대장 도깨비 이기후 교수는 "도깨비공원을 전국 디자인학과 학생들의 현장 실습장으로 운영할 계획"이라며 "동화적 개념으로 디자인된 도깨비 건축과 조형물이 자연환경과 어우러지는 디자인 테마파크로서 계절에 따라 다양한 볼거리를 제공할 예정”임을 밝혔습니다. 도깨비 탈 만들기, 양초 만들기, 흙 빚기, 도깨비 액자 만들기, 도깨비 몸속으로 들어가 영상 체험하기, 어린이날 행사 등 여러 활동을 통해 어른, 아이 할 것 없이 모든 이들에게 신나는 경험을 제공하였습니다.',
    images: getImagesData(5),
  },
  {
    title: '지도',
    desc: '현장관리공사계획, 수도공사, 땅의 용도 등 다양한 도깨비공원 지도 모음입니다.',
    images: getImagesData(6),
  },
  {
    title: '영상',
    desc: '도깨비공원 관련 영상물입니다. 가장 큰 도깨비인 깨뽀 영상관에서 상영되었던 영상, 도깨비공원의 모습을 담은 영상, 야간 개장을 위해 만들었던 영상 등 7개의 영상이 남아있습니다.',
    images: [],
  },
  {
    title: '허수깨비',
    desc: '허수아비와 도깨비의 합성어인 허수깨비는 인간의 땅과 도깨비 땅을 이어주는 절대적 존재입니다. 도깨비공원에서 가장 으시시한 장소인 으시시에서 주로 지내면서 사람들을 놀래킵니다. 실재하는 도깨비공원과 새롭게 창조되어 디지털 세상에 존재하는 2D 도깨비 공원을 이어주는 신비의 존재입니다. 공원 운영 당시에는 이기후 교수가 직접 허수깨비가 되어 관람객을 놀라게 했고, 이후에는 여러 사람들이 허수깨비로 변해서 관람객을 즐겁게 하였습니다. 지금도 공원 어딘가에서 돌아다니고 있을 허수깨비를 조심하세요!',
    images: getImagesData(7),
  },
]
