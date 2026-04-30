import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Link, router } from 'expo-router';

export default function Profile() {
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
      
      {/* Background Blobs for Atmosphere */}
      <View style={[styles.blob, { top: -100, left: -100, backgroundColor: 'rgba(59, 130, 246, 0.05)' }]} />
      <View style={[styles.blob, { bottom: -100, right: -100, backgroundColor: 'rgba(59, 130, 246, 0.1)' }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>ZAKY PORTFOLIO</Text>
          {isLargeScreen ? (
            <View style={styles.navLinks}>
              <Link href="/" asChild><Text style={styles.navLink}>Index</Text></Link>
              <Text style={[styles.navLink, styles.activeNavLink]}>Profile</Text>
              <Link href="/skills" asChild><Text style={styles.navLink}>Skills</Text></Link>
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

        {/* Main Content Container */}
        <View style={styles.mainContainer}>
          <BlurView intensity={20} tint="dark" style={[styles.profileCard, !isLargeScreen && { flexDirection: 'column' }]}>
            
            {/* Left Section: Image */}
            <View style={[styles.leftSection, !isLargeScreen && { width: '100%', borderRightWidth: 0, borderBottomWidth: 1 }]}>
              <View style={styles.imageOuterRing}>
                <View style={styles.imageInnerRing}>
                  <Image 
                    source={require('../assets/images/profile.png')} 
                    style={styles.profileImg}
                    contentFit="cover"
                  />
                </View>
              </View>
              
              <View style={styles.statusBadge}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>AVAILABLE FOR CONSULTATION</Text>
              </View>
            </View>

            {/* Right Section: Info */}
            <View style={[styles.rightSection, !isLargeScreen && { width: '100%', padding: 25 }]}>
              <View style={styles.titleRow}>
                <View style={styles.titleDash} />
                <Text style={styles.sectionTitle}>EXECUTIVE PROFILE</Text>
              </View>
              
              <Text style={styles.aboutHeader}>About Me</Text>
              
             <Text style={styles.aboutDescription}>
                I am a Computer Science student at Binus University who thrives at the 
                intersection of 
                <Text style={styles.highlightText}> software engineering</Text> and 
                <Text style={styles.highlightText}> visual production</Text>. 
                My technical expertise focuses on building scalable backend systems using 
                <Text style={styles.highlightText}> Go and Laravel</Text>, 
                where I prioritize efficient architecture and clean code.
                {'\n\n'}
                Beyond programming, I have extensive experience as a 
                <Text style={styles.highlightText}> Visual Jockey</Text> and 
                <Text style={styles.highlightText}> Lighting Designer</Text>, 
                using Resolume Arena to create immersive digital experiences. My mission is 
                to bridge the gap between technical logic and creative expression, 
                integrating 
                <Text style={styles.highlightText}> Artificial Intelligence</Text> to 
                elevate both functionality and visual aesthetics in every project.
              </Text>

              <View style={styles.infoCardsRow}>
                <View style={styles.infoCard}>
                  <Text style={styles.infoCardLabel}>Expertise</Text>
                  <Text style={styles.infoCardValue}>Systems Architect</Text>
                </View>
                <View style={styles.infoCard}>
                  <Text style={styles.infoCardLabel}>Location</Text>
                  <Text style={styles.infoCardValue}>Malang, Indonesia</Text>
                </View>
              </View>

              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.connectBtn} onPress={() => router.push('/contact')}>
                  <Text style={styles.connectBtnText}>Let's Connect</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.portfolioBtn} onPress={() => router.push('/project')}>
                  <Text style={styles.portfolioBtnText}>View Portfolio</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </View>

      </ScrollView>
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
  mainContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  profileCard: {
    width: '100%',
    maxWidth: 1100,
    borderRadius: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  leftSection: {
    width: isLargeScreen ? '45%' : '100%',
    backgroundColor: 'rgba(255,255,255,0.01)',
    padding: isLargeScreen ? 40 : 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.05)',
    borderBottomWidth: isLargeScreen ? 0 : 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  imageOuterRing: {
    width: isLargeScreen ? 320 : 220,
    height: isLargeScreen ? 320 : 220,
    borderRadius: 160,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  imageInnerRing: {
    width: isLargeScreen ? 280 : 190,
    height: isLargeScreen ? 280 : 190,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.3)',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 10,
  },
  statusText: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  rightSection: {
    width: isLargeScreen ? '55%' : '100%',
    padding: isLargeScreen ? 50 : 25,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleDash: {
    width: 30,
    height: 2,
    backgroundColor: '#3B82F6',
    marginRight: 15,
  },
  sectionTitle: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
  },
  aboutHeader: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
  },
  aboutDescription: {
    color: '#9CA3AF',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 35,
    fontWeight: '400',
  },
  highlightText: {
    color: '#3B82F6',
    fontWeight: '600',
  },
  infoCardsRow: {
    flexDirection: isLargeScreen ? 'row' : 'column',
    gap: 20,
    marginBottom: 40,
  },
  infoCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.03)',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  infoCardLabel: {
    color: '#3B82F6',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
  },
  infoCardValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonGroup: {
    flexDirection: isLargeScreen ? 'row' : 'column',
    gap: 20,
  },
  connectBtn: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  connectBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  portfolioBtn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
});

