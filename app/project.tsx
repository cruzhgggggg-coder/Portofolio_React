import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

export default function Project() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768;
  const styles = getStyles(isLargeScreen, width);

  const projects = [
{
      id: '1',
      title: 'AI-Finpro: Intelligent Academic System',
      category: 'FULL-STACK / AI INTEGRATION',
      description: 'AI-Finpro is a web-based platform designed to optimize academic processes through Artificial Intelligence integration. This project serves as a core implementation of my expertise in Full-stack Development and AI Integration. It aims to simplify complex academic workflows into an intuitive, high-performance interface.',
      image: require('../assets/images/neural.png'), 
      tech: ['Python', 'Typescript', 'Vercel',],
      impact: 'Automated workflow optimization'
    },
{
      id: '2',
      title: 'LuxuryStore E-Commerce Platform',
      category: 'WEB DEVELOPMENT / UI DESIGN',
      description: 'A premium e-commerce platform designed with a high-end aesthetic, focusing on seamless user experience and sophisticated product presentation. This project demonstrates my ability to blend technical performance with luxury-grade visual design.',
      image: require('../assets/images/luxury-store.png'), 
      tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      impact: 'High-fidelity visual clarity'
    },
{
      id: '3',
      title: 'TierLog: AI-Powered E-Logbook',
      category: 'BACKEND / MACHINE LEARNING',
      description: 'An intelligent academic supervision system for undergraduate thesis tracking. It leverages AI to automate logbook validation and streamline the communication between students and lecturers through a robust digital ecosystem.',
      image: require('../assets/images/tierlog.png'),
      tech: ['Go', 'Gin', 'PostgreSQL', 'Large Language Models'],
      impact: 'Automated supervision efficiency'
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0F1219', '#080A0F']}
        style={styles.background}
      />
      
      {/* Background Atmosphere */}
      <View style={[styles.blob, { top: -150, right: -150, backgroundColor: 'rgba(59, 130, 246, 0.05)' }]} />
      <View style={[styles.blob, { bottom: -150, left: -150, backgroundColor: 'rgba(45, 212, 191, 0.03)' }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>EXECUTIVE PORTFOLIO</Text>
          {isLargeScreen ? (
            <View style={styles.navLinks}>
              <Link href="/" asChild><Text style={styles.navLink}>Index</Text></Link>
              <Link href="/profil" asChild><Text style={styles.navLink}>Profile</Text></Link>
              <Link href="/skills" asChild><Text style={styles.navLink}>Skills</Text></Link>
              <Link href="/academic" asChild><Text style={styles.navLink}>Timeline</Text></Link>
              <Text style={[styles.navLink, styles.activeNavLink]}>Projects</Text>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.downloadBtn}>
                <Text style={styles.downloadBtnText}>Download CV</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity>
              <Ionicons name="menu" size={28} color="white" />
            </TouchableOpacity>
          )}
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.heroPreTitle}>TECHNICAL VENTURES</Text>
            <Text style={styles.heroTitle}>Strategic Impact</Text>
            <Text style={styles.description}>
              Selected initiatives demonstrating the intersection of architectural rigor, mathematical precision, and high-stakes execution.
            </Text>
          </View>
        </View>

        {/* Project Grid */}
        <View style={[styles.gridContainer, !isLargeScreen && { paddingHorizontal: 20 }]}>
          {projects.map((item, index) => (
            <ProjectCard key={item.id} project={item} isLargeScreen={isLargeScreen} />
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

interface ProjectType {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  tech: string[];
  image: any;
}

function ProjectCard({ project, isLargeScreen }: { project: ProjectType; isLargeScreen: boolean }) {
  const { width } = useWindowDimensions();
  const styles = getStyles(isLargeScreen, width);
  return (
    <BlurView intensity={20} tint="dark" style={[styles.card, !isLargeScreen && { width: '100%', marginBottom: 30 }]}>
      <View style={styles.imageWrapper}>
        <Image 
          source={project.image} 
          style={styles.projectImage} 
          contentFit="cover"
          transition={1000}
        />
        <LinearGradient
          colors={['transparent', 'rgba(8, 10, 15, 0.9)']}
          style={styles.imageOverlay}
        />
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>{project.category}</Text>
        </View>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={styles.projectTitle}>{project.title}</Text>
        <Text style={styles.projectDescription}>{project.description}</Text>
        
        <View style={styles.techTagContainer}>
          {project.tech.map((t: string, i: number) => (
            <View key={i} style={styles.techTag}>
              <Text style={styles.techTagText}>{t}</Text>
            </View>
          ))}
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.impactContainer}>
            <Text style={styles.impactLabel}>METRIC IMPACT</Text>
            <Text style={styles.impactValue}>{project.impact}</Text>
          </View>
          <TouchableOpacity style={styles.viewDetailsBtn}>
            <Text style={styles.viewDetailsText}>VIEW ANALYSIS</Text>
            <Ionicons name="arrow-forward" size={14} color="#3B82F6" />
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
}


const getStyles = (isLargeScreen: boolean, width: number) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080A0F',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  blob: {
    position: 'absolute',
    width: 500,
    height: 500,
    borderRadius: 250,
    opacity: 0.2,
  },
  scrollContent: {
    paddingBottom: 150,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    width: '100%',
  },
  logoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    color: '#9CA3AF',
    fontSize: 13,
    marginHorizontal: 12,
    fontWeight: '600',
  },
  activeNavLink: {
    color: '#3B82F6',
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: 10,
  },
  downloadBtn: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    marginLeft: 10,
  },
  downloadBtnText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
  },
  heroSection: {
    paddingHorizontal: 40,
    marginTop: 60,
    marginBottom: 40,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  titleContainer: {
    borderLeftWidth: 3,
    borderLeftColor: '#3B82F6',
    paddingLeft: 25,
  },
  heroPreTitle: {
    color: '#3B82F6',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 10,
  },
  heroTitle: {
    color: 'white',
    fontSize: 52,
    fontWeight: '900',
    marginBottom: 20,
    letterSpacing: -1,
  },
  description: {
    color: '#9CA3AF',
    fontSize: 18,
    lineHeight: 28,
    maxWidth: 600,
    fontWeight: '500',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 40,
    justifyContent: 'center',
    gap: 30,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  card: {
    width: (width - 110) / 2 > 450 ? 450 : (width - 110) / 2,
    backgroundColor: 'rgba(255,255,255,0.01)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  imageWrapper: {
    height: 240,
    position: 'relative',
  },
  projectImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  categoryBadge: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(8, 10, 15, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  categoryBadgeText: {
    color: '#3B82F6',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  cardContent: {
    padding: 30,
  },
  projectTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
  },
  projectDescription: {
    color: '#9CA3AF',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 25,
    fontWeight: '500',
  },
  techTagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 30,
  },
  techTag: {
    backgroundColor: 'rgba(59, 130, 246, 0.05)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.1)',
  },
  techTagText: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '700',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
  },
  impactContainer: {
    flex: 1,
  },
  impactLabel: {
    color: '#4B5563',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  impactValue: {
    color: '#2DD4BF',
    fontSize: 14,
    fontWeight: '700',
  },
  viewDetailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  viewDetailsText: {
    color: '#3B82F6',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
});

