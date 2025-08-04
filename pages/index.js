// 中文仿 FTMO 首页 - 投控家 toukongjia.com
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold mb-4">我们出资金，你专注交易</h1>
        <p className="text-lg text-gray-600 mb-6">通过评估后即可获得最多 $500,000 的实盘账户。</p>
        <Link href="/signup"><Button className="text-lg px-6 py-3">立即开始挑战</Button></Link>
      </section>

      {/* Features Section */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["资金支持", "高额利润分成", "无风险交易"].map((title, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <CheckCircle className="text-green-500 w-8 h-8 mb-2" />
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">
                {index === 0 && "通过挑战后我们出资最高 $500,000 支持你的交易。"}
                {index === 1 && "表现优秀的交易员可获得 90% 的净利润分成。"}
                {index === 2 && "账户亏损由我们承担，你只需专注于执行策略。"}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Challenge Plans */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">挑战计划</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{title:'初级计划', price:'$49', capital:'$10,000'}, {title:'进阶计划', price:'$99', capital:'$50,000'}, {title:'专业计划', price:'$199', capital:'$100,000'}].map((plan, i) => (
            <Card key={i} className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-2xl text-blue-600 font-bold mb-2">{plan.price}</p>
                <p className="text-gray-600 mb-4">模拟账户资金：{plan.capital}</p>
                <Link href="/payment"><Button className="w-full">立即挑战</Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100 rounded-2xl mt-10 text-center">
        <h2 className="text-3xl font-bold mb-6">如何成为投控交易员</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {["评估阶段：通过目标收益和回撤要求", "验证阶段：维持稳定表现", "实盘账户：获取资金并分享利润"].map((step, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">步骤 {i + 1}</h3>
                <p className="text-gray-600">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section className="text-center py-20 bg-blue-50 rounded-2xl mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4">准备好展示你的交易能力了吗？</h2>
        <p className="text-gray-700 mb-6">立即开始挑战计划，迈出成为专业交易员的第一步。</p>
        <Link href="/signup"><Button className="text-lg px-6 py-3">立即报名</Button></Link>
      </motion.section>
    </main>
  );
}
