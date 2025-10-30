// 测试数据和常量

export type ItemType = 'doll' | 'jewelry' | 'book' | 'phone' | 'lion'

export interface TestOption {
  id: ItemType
  emoji: string
  name: string
  description?: string  // 可选，暂不展示
}

export const testOptions: TestOption[] = [
  { id: 'doll', emoji: '🧸', name: '布娃娃' },
  { id: 'jewelry', emoji: '💎', name: '珠宝' },
  { id: 'book', emoji: '📚', name: '书' },
  { id: 'phone', emoji: '📱', name: '手机' },
  { id: 'lion', emoji: '🦁', name: '狮子' },
]

export interface Tip {
  emoji: string
  title: string
  content: string
}

export const tips: Tip[] = [
  {
    emoji: '1️⃣',
    title: '根据直觉、感觉选择',
    content: '这份心理小测试，你是根据你的直觉、感觉做出的选择，所以呢，从心理学角度来讲，它便是你潜意识有关自己与金钱财富的投射，呈现的是你在潜意识层面的一些财富心理情况。'
  },
  {
    emoji: '2️⃣',
    title: '摇摆的选项都可参考',
    content: '有人可能会在某两个或者某几个选项中摇摆过，最终选定某一个，这种情况也许是这两个选项的状态你或多或少都有，只是程度不同，都可以作为参考。'
  },
  {
    emoji: '3️⃣',
    title: '选择代表此刻状态',
    content: '这个选择不是一成不变的，有人今天选和一年后再跟随直觉选，选项会有变化，因为人是多么复杂多么精妙的一个存在，我们的心理状态也是一直在变化的，此刻的选择只是代表你此时当下的状态。'
  },
  {
    emoji: '4️⃣',
    title: '没有好坏之分',
    content: '选项没有高低好坏之分，每个特点都有它的好处与卡点。如果你觉得说中了你的特点和长处，那么假如你愿意试试看，提升下"卡点"的部分，是不是也同样会"说中""很准"，让你的财富状况有一个很大的提升呢？'
  },
]

