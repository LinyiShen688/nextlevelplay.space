import React, { useState, useEffect } from 'react';
import { Star, Moon, Sun, Sparkles, X } from 'lucide-react';
import { Auth } from './components/Auth';
import { UserProfile } from './components/UserProfile';
import { useAuthStore } from './store/authStore';
import { supabase } from './lib/supabase';

const zodiacSigns = [
  { 
    name: '白羊座', 
    date: '3.21-4.19', 
    element: '火象', 
    lucky: '3, 9', 
    color: '红色',
    image: 'https://images.unsplash.com/photo-1481819613568-3701cbc70156?auto=format&fit=crop&w=800&q=80',
    personality: '热情、勇敢、冲劲十足',
    description: '白羊座的人天生具有领袖气质，喜欢冒险和挑战。他们直率、乐观，但有时过于冲动。'
  },
  { 
    name: '金牛座', 
    date: '4.20-5.20', 
    element: '土象', 
    lucky: '2, 6', 
    color: '绿色',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    personality: '稳重、务实、享受生活',
    description: '金牛座的人重视物质生活，性格沉稳可靠。他们喜欢美食和舒适的生活环境。'
  },
  { 
    name: '双子座', 
    date: '5.21-6.21', 
    element: '风象', 
    lucky: '5, 7', 
    color: '黄色',
    image: 'https://images.unsplash.com/photo-1470549638415-0a0755be0619?auto=format&fit=crop&w=800&q=80',
    personality: '灵活、聪明、善于交际',
    description: '双子座的人思维敏捷，善于表达。他们充满好奇心，但有时显得优柔寡断。'
  },
  { 
    name: '巨蟹座', 
    date: '6.22-7.22', 
    element: '水象', 
    lucky: '4, 8', 
    color: '银色',
    image: 'https://images.unsplash.com/photo-1500479694472-551d1fb6258d?auto=format&fit=crop&w=800&q=80',
    personality: '敏感、关怀、重视家庭',
    description: '巨蟹座的人富有同情心，重视亲情。他们直觉敏锐，但容易受情绪影响。'
  },
  { 
    name: '狮子座', 
    date: '7.23-8.22', 
    element: '火象', 
    lucky: '1, 9', 
    color: '金色',
    image: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=800&q=80',
    personality: '自信、慷慨、富有领导力',
    description: '狮子座的人天生就是领袖，充满魅力。他们慷慨大方，但有时过于自我。'
  },
  { 
    name: '处女座', 
    date: '8.23-9.22', 
    element: '土象', 
    lucky: '3, 7', 
    color: '棕色',
    image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=800&q=80',
    personality: '完美主义、细心、理性',
    description: '处女座的人做事认真仔细，追求完美。他们善于分析，但有时过于挑剔。'
  },
  { 
    name: '天秤座', 
    date: '9.23-10.23', 
    element: '风象', 
    lucky: '2, 8', 
    color: '粉色',
    image: 'https://images.unsplash.com/photo-1477322524744-0eece9e79640?auto=format&fit=crop&w=800&q=80',
    personality: '优雅、公平、追求和谐',
    description: '天秤座的人追求平衡与和谐，善于交际。他们举止优雅，但常常犹豫不决。'
  },
  { 
    name: '天蝎座', 
    date: '10.24-11.22', 
    element: '水象', 
    lucky: '4, 9', 
    color: '深红',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    personality: '神秘、洞察力强、意志坚定',
    description: '天蝎座的人具有强大的洞察力，意志力坚强。他们重情重义，但有时过于固执。'
  },
  { 
    name: '射手座', 
    date: '11.23-12.21', 
    element: '火象', 
    lucky: '3, 6', 
    color: '紫色',
    image: 'https://images.unsplash.com/photo-1487300001871-12053913095d?auto=format&fit=crop&w=800&q=80',
    personality: '乐观、爱冒险、追求自由',
    description: '射手座的人热爱自由，思想开放。他们乐观向上，但有时缺乏耐心。'
  },
  { 
    name: '摩羯座', 
    date: '12.22-1.19', 
    element: '土象', 
    lucky: '1, 7', 
    color: '黑色',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80',
    personality: '务实、有责任心、目标明确',
    description: '摩羯座的人责任心强，做事踏实。他们目标明确，但有时显得过于严肃。'
  },
  { 
    name: '水瓶座', 
    date: '1.20-2.18', 
    element: '风象', 
    lucky: '5, 8', 
    color: '蓝色',
    image: 'https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=800&q=80',
    personality: '独特、创新、人道主义',
    description: '水瓶座的人思想前卫，富有创造力。他们关心人类福祉，但有时显得疏离。'
  },
  { 
    name: '双鱼座', 
    date: '2.19-3.20', 
    element: '水象', 
    lucky: '2, 9', 
    color: '海蓝',
    image: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?auto=format&fit=crop&w=800&q=80',
    personality: '富有同情心、浪漫、直觉强',
    description: '双鱼座的人富有同情心，想象力丰富。他们心思细腻，但有时过于理想化。'
  }
];

function App() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user, setSession } = useAuthStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const getFortune = () => {
    const fortunes = [
      '今天会有意想不到的好运降临',
      '工作上将遇到新的机遇',
      '适合与朋友相聚',
      '财运亨通的一天',
      '桃花运旺盛',
      '适合学习新知识'
    ];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  };

  const handleSignClick = (index) => {
    setSelectedSign(index);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white">
      <header className="pt-10 pb-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Moon className="w-8 h-8" />
          <h1 className="text-4xl font-bold">星座运势</h1>
          <Star className="w-8 h-8" />
        </div>
        <p className="text-lg text-gray-300">探索你的每日星座运势</p>
      </header>

      <div className="container mx-auto px-4 mb-8">
        {user ? <UserProfile /> : <Auth />}
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {zodiacSigns.map((sign, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedSign === index ? 'ring-2 ring-pink-500' : ''
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => handleSignClick(index)}
            >
              <div className="relative">
                <img 
                  src={sign.image} 
                  alt={sign.name}
                  className="w-full h-48 object-cover opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">{sign.name}</h2>
                  <Sparkles className={`w-5 h-5 ${isHovered === index ? 'text-yellow-400' : 'text-gray-400'}`} />
                </div>
                <p className="text-gray-300 mb-2">日期: {sign.date}</p>
                <p className="text-gray-300 mb-2">元素: {sign.element}</p>
                <p className="text-gray-300 mb-2">幸运数字: {sign.lucky}</p>
                <p className="text-gray-300">幸运色: {sign.color}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showModal && selectedSign !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl max-w-2xl w-full p-6 relative animate-fadeIn">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img 
                  src={zodiacSigns[selectedSign].image} 
                  alt={zodiacSigns[selectedSign].name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{zodiacSigns[selectedSign].name}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">性格特征</h3>
                    <p className="text-gray-300">{zodiacSigns[selectedSign].personality}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">星座解读</h3>
                    <p className="text-gray-300">{zodiacSigns[selectedSign].description}</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 mt-4">
                    <h3 className="text-xl font-semibold mb-2">今日运势</h3>
                    <p className="text-yellow-300">{getFortune()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="text-center py-8 text-gray-400">
        <div className="flex items-center justify-center gap-2">
          <Sun className="w-5 h-5" />
          <p>每日更新 · 星座运势</p>
          <Moon className="w-5 h-5" />
        </div>
      </footer>
    </div>
  );
}

export default App;