import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Eye, Target, Zap, Battery, Cpu, Heart } from 'lucide-react';

const VisionMission = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              {t('vision.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('vision.hero.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* The EULE Story */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('vision.story.title')}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="bg-card border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10">
                        <span className="text-4xl">🦉</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                      {t('vision.story.owl.title')}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('vision.story.owl.description')}
                    </p>
                    <div className="text-center">
                      <a 
                        href="https://www.grugapark.de/erleben/fuer_tierfreunde/eulen.de.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline transition-colors"
                      >
                        🌐 Virtueller Besuch der Eulen im Grugapark
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-primary">
                  {t('vision.story.meaning.title')}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('vision.story.meaning.description')}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: Eye, label: t('vision.story.values.wisdom') },
                    { icon: Zap, label: t('vision.story.values.precision') },
                    { icon: Target, label: t('vision.story.values.focus') },
                    { icon: Heart, label: t('vision.story.values.leadership') }
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                      <value.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{value.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('vision.section.title')}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {t('vision.pillars.speed.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('vision.pillars.speed.description')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {t('vision.pillars.intelligence.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('vision.pillars.intelligence.description')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <Battery className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {t('vision.pillars.sustainability.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('vision.pillars.sustainability.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <blockquote className="text-2xl md:text-3xl font-bold text-primary italic max-w-4xl mx-auto">
                "{t('vision.quote')}"
              </blockquote>
              <p className="text-lg text-muted-foreground mt-4">- Hatice Tavlı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('mission.section.title')}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-12">
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t('mission.description')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {t('mission.goals.technical.title')}
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {t('mission.goals.technical.point1')}
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {t('mission.goals.technical.point2')}
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {t('mission.goals.technical.point3')}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {t('mission.goals.impact.title')}
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {t('mission.goals.impact.point1')}
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {t('mission.goals.impact.point2')}
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {t('mission.goals.impact.point3')}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('vision.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('vision.cta.description')}
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              {t('vision.cta.button')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;