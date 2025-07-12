import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("1080p");
  const [format, setFormat] = useState("mp4");

  const platforms = [
    { name: "YouTube", icon: "Play", color: "bg-red-500" },
    { name: "TikTok", icon: "Music", color: "bg-black" },
    { name: "Vimeo", icon: "Video", color: "bg-blue-500" },
    { name: "Instagram", icon: "Camera", color: "bg-pink-500" },
  ];

  const features = [
    { title: "Высокое качество", desc: "До 4K разрешения", icon: "Zap" },
    {
      title: "Быстрая скорость",
      desc: "Мгновенное скачивание",
      icon: "Download",
    },
    {
      title: "Без регистрации",
      desc: "Просто вставьте ссылку",
      icon: "Shield",
    },
    {
      title: "Все форматы",
      desc: "MP4, AVI, WebM и другие",
      icon: "FileVideo",
    },
  ];

  const reviews = [
    {
      name: "Алексей К.",
      rating: 5,
      text: "Отличный сервис! Скачиваю видео каждый день.",
    },
    { name: "Мария С.", rating: 5, text: "Быстро и удобно. Рекомендую всем!" },
    {
      name: "Дмитрий В.",
      rating: 4,
      text: "Хорошее качество видео, простой интерфейс.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                <Icon name="Download" size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">VideoLoad</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Главная
              </a>
              <a
                href="#downloads"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Загрузки
              </a>
              <a
                href="#how-to"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Как использовать
              </a>
              <a
                href="#support"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Поддержка
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Отзывы
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Скачивайте видео с
                <span className="gradient-text block">любых платформ</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Быстрый и бесплатный сервис для скачивания видео с YouTube,
                TikTok, Vimeo и других популярных платформ
              </p>

              {/* Download Form */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-200 max-w-lg mx-auto lg:mx-0">
                <div className="space-y-4">
                  <Input
                    placeholder="Вставьте ссылку на видео..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-12 text-lg border-2 border-gray-200 focus:border-cyan-400"
                  />
                  <div className="flex gap-2">
                    <Select value={quality} onValueChange={setQuality}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4k">4K (2160p)</SelectItem>
                        <SelectItem value="2k">2K (1440p)</SelectItem>
                        <SelectItem value="1080p">HD (1080p)</SelectItem>
                        <SelectItem value="720p">HD (720p)</SelectItem>
                        <SelectItem value="480p">SD (480p)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={format} onValueChange={setFormat}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mp4">MP4</SelectItem>
                        <SelectItem value="avi">AVI</SelectItem>
                        <SelectItem value="webm">WebM</SelectItem>
                        <SelectItem value="mov">MOV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full h-12 text-lg gradient-bg hover-scale pulse-glow border-0">
                    <Icon name="Download" className="mr-2" />
                    Скачать видео
                  </Button>
                </div>
              </div>

              {/* Supported Platforms */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {platforms.map((platform) => (
                  <Badge
                    key={platform.name}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    <Icon name={platform.icon} size={14} className="mr-1" />
                    {platform.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <img
                src="/img/c4d943c0-d042-42f3-a558-07339bc0b3e3.jpg"
                alt="Video Downloader"
                className="w-full max-w-md mx-auto float-animation rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Почему выбирают нас?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover-scale bg-white/80 backdrop-blur-md border-2 border-gray-100"
              >
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section id="how-to" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Как использовать
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold">Скопируйте ссылку</h3>
              <p className="text-gray-600">
                Найдите видео на YouTube, TikTok или другой платформе и
                скопируйте ссылку
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold">Вставьте в поле</h3>
              <p className="text-gray-600">
                Вставьте ссылку в поле выше и выберите качество и формат
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold">Скачайте видео</h3>
              <p className="text-gray-600">
                Нажмите кнопку "Скачать" и получите видео на свое устройство
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Популярные загрузки
          </h2>
          <Tabs defaultValue="recent" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recent">Недавние</TabsTrigger>
              <TabsTrigger value="popular">Популярные</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>
            <TabsContent value="recent" className="space-y-4">
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-4 hover-scale">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Icon name="Play" className="text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Название видео {i}</h3>
                        <p className="text-sm text-gray-600">
                          YouTube • 5:32 • 1080p MP4
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" size={16} className="mr-1" />
                        Скачать
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="popular" className="space-y-4">
              <div className="text-center py-8 text-gray-500">
                <Icon name="TrendingUp" size={48} className="mx-auto mb-4" />
                <p>Популярные загрузки появятся здесь</p>
              </div>
            </TabsContent>
            <TabsContent value="trending" className="space-y-4">
              <div className="text-center py-8 text-gray-500">
                <Icon name="Flame" size={48} className="mx-auto mb-4" />
                <p>Трендовые видео скоро</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Отзывы пользователей
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover-scale bg-white/80 backdrop-blur-md"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {review.name[0]}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-sm">{review.name}</CardTitle>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={12}
                            className="text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>"{review.text}"</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Нужна помощь?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Наша команда поддержки готова помочь вам 24/7. Свяжитесь с нами
            любым удобным способом.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <Icon
                  name="Mail"
                  className="mx-auto mb-2 text-cyan-500"
                  size={24}
                />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">support@videoload.ru</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <Icon
                  name="MessageCircle"
                  className="mx-auto mb-2 text-blue-500"
                  size={24}
                />
                <CardTitle>Чат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Онлайн поддержка</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <Icon
                  name="FileText"
                  className="mx-auto mb-2 text-purple-500"
                  size={24}
                />
                <CardTitle>FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">База знаний</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                  <Icon name="Download" size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold">VideoLoad</span>
              </div>
              <p className="text-gray-400">
                Лучший сервис для скачивания видео с популярных платформ
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Платформы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>YouTube</li>
                <li>TikTok</li>
                <li>Vimeo</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Форматы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>MP4</li>
                <li>AVI</li>
                <li>WebM</li>
                <li>MOV</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Политика</li>
                <li>Условия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VideoLoad. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
