import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

export default function Skills() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768;

  const styles = getStyles(isLargeScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0F1219', '#080A0F']}
        style={styles.background}
      />
      
      {/* Background Blobs */}
      <View style={[styles.blob, { top: -100, right: -100, backgroundColor: 'rgba(59, 130, 246, 0.05)' }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>ZAKY PORTFOLIO</Text>
          {isLargeScreen ? (
            <View style={styles.navLinks}>
              <Link href="/" asChild><Text style={styles.navLink}>Index</Text></Link>
              <Link href="/profil" asChild><Text style={styles.navLink}>Profile</Text></Link>
              <Text style={[styles.navLink, styles.activeNavLink]}>Skills</Text>
              <Link href="/academic" asChild><Text style={styles.navLink}>Timeline</Text></Link>
              <Link href="/project" asChild><Text style={styles.navLink}>Projects</Text></Link>
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
          <View style={styles.badge}>
            <Ionicons name="bar-chart-outline" size={14} color="#3B82F6" />
            <Text style={styles.badgeText}> EXPERTISE MATRIX</Text>
          </View>
          <Text style={styles.heroTitle}>
            Core <Text style={styles.heroTitleAccent}>Competencies</Text>
          </Text>
          <Text style={styles.description}>
            A technical and creative breakdown of my skills in building robust backend 
            architectures and designing immersive visual experiences.
          </Text>
        </View>

        {/* Content Grid */}
        <View style={[styles.gridContainer, !isLargeScreen && { flexDirection: 'column' }]}>
          
          {/* Left Column: Skills List */}
          <BlurView intensity={20} tint="dark" style={[styles.skillsCard, !isLargeScreen && { width: '100%' }]}>
            <SkillItem icon="server-outline" name="Backend Development (Go)" percentage={92} />
            <SkillItem icon="code-working-outline" name="Laravel Framework" percentage={90} />
            <SkillItem icon="flash-outline" name="Visual Jockey (Resolume)" percentage={88} />
            <SkillItem icon="bulb-outline" name="Lighting Design" percentage={85} />
            <SkillItem icon="hardware-chip-outline" name="AI Integration" percentage={80} />
          </BlurView>

          {/* Right Column: Cards */}
          <View style={[styles.rightColumn, !isLargeScreen && { width: '100%' }]}>
            
            {/* Academic Card */}
            <BlurView intensity={20} tint="dark" style={styles.presenceCard}>
              <View style={styles.presenceContent}>
                <View style={styles.circularProgressContainer}>
                  <View style={styles.circularProgress}>
                     <Text style={styles.presenceScore}>4.0</Text>
                     <Text style={styles.presenceLabel}>GPA AVG</Text>
                  </View>
                </View>
                <View style={styles.presenceTextContainer}>
                  <Text style={styles.presenceTitle}>Academic Excellence</Text>
                  <Text style={styles.presenceDesc}>
                    Computer Science student at Binus University with a focus on software 
                    architecture and innovative problem solving.
                  </Text>
                </View>
              </View>
            </BlurView>

            {/* Collaborative Engineering Card */}
            <BlurView intensity={20} tint="dark" style={styles.leadershipCard}>
               <Image 
                 source={require('../assets/images/leadership.png')}
                 style={styles.leadershipImg}
                 contentFit="cover"
               />
               <View style={styles.leadershipOverlay}>
                  <View style={styles.leadershipBadge}>
                    <Ionicons name="git-branch-outline" size={18} color="white" />
                  </View>
                  <Text style={styles.leadershipText}>Collaborative Engineering</Text>
               </View>
            </BlurView>

          </View>
        </View>

      </ScrollView>
    </View>
  );
}

function SkillItem({ icon, name, percentage }: { icon: string; name: string; percentage: number }) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768;
  const styles = getStyles(isLargeScreen);
  return (
    <View style={styles.skillItem}>
      <View style={styles.skillHeader}>
        <View style={styles.skillNameGroup}>
          <Ionicons name={icon as any} size={20} color="#3B82F6" style={styles.skillIcon} />
          <Text style={styles.skillName}>{name}</Text>
        </View>
        <Text style={styles.skillPercentage}>{percentage}%</Text>
      </View>
      <View style={styles.progressBg}>
        <LinearGradient
          colors={['#3B82F6', '#60A5FA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.progressFill, { width: `${percentage}%` }]}
        />
      </View>
    </View>
  );
}

const getStyles = (isLargeScreen: boolean) => StyleSheet.create({
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
    width: 400,
    height: 400,
    borderRadius: 200,
    opacity: 0.3,
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
    paddingHorizontal: 30,
    marginTop: 40,
    marginBottom: 40,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 20,
  },
  badgeText: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  heroTitle: {
    color: 'white',
    fontSize: isLargeScreen ? 48 : 36,
    fontWeight: '900',
    marginBottom: 20,
  },
  heroTitleAccent: {
    color: '#3B82F6',
  },
  description: {
    color: '#9CA3AF',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 600,
  },
  gridContainer: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    gap: 25,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  skillsCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.01)',
    borderRadius: 30,
    padding: isLargeScreen ? 40 : 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  skillItem: {
    marginBottom: 35,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  skillNameGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillIcon: {
    marginRight: 15,
  },
  skillName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  skillPercentage: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: '800',
  },
  progressBg: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 3,
    width: '100%',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  rightColumn: {
    width: isLargeScreen ? '40%' : '100%',
    gap: 25,
  },
  presenceCard: {
    backgroundColor: 'rgba(255,255,255,0.01)',
    borderRadius: 30,
    padding: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  presenceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  circularProgressContainer: {
    width: isLargeScreen ? 100 : 80,
    height: isLargeScreen ? 100 : 80,
    borderRadius: isLargeScreen ? 50 : 40,
    borderWidth: 8,
    borderColor: 'rgba(59, 130, 246, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#3B82F6',
    borderRightColor: '#3B82F6',
    borderLeftColor: '#3B82F6',
  },
  circularProgress: {
    alignItems: 'center',
  },
  presenceScore: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  presenceLabel: {
    color: '#6B7280',
    fontSize: 8,
    fontWeight: '800',
    marginTop: 2,
  },
  presenceTextContainer: {
    flex: 1,
  },
  presenceTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  presenceDesc: {
    color: '#9CA3AF',
    fontSize: 12,
    lineHeight: 18,
  },
  leadershipCard: {
    backgroundColor: 'rgba(255,255,255,0.01)',
    borderRadius: 30,
    height: 280,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
    position: 'relative',
  },
  leadershipImg: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  leadershipOverlay: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  leadershipBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(59, 130, 246, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  leadershipText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});