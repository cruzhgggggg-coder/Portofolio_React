import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
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
      <View style={[styles.blob, { top: -100, left: -100, backgroundColor: 'rgba(59, 130, 246, 0.08)' }]} />
      <View style={[styles.blob, { bottom: -100, right: -100, backgroundColor: 'rgba(59, 130, 246, 0.12)' }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>ZAKY PORTFOLIO</Text>
          {isLargeScreen ? (
            <View style={styles.navLinks}>
              <Text style={[styles.navLink, styles.activeNavLink]}>Index</Text>
              <Link href="/profil" asChild><Text style={styles.navLink}>Profile</Text></Link>
              <Link href="/skills" asChild><Text style={styles.navLink}>Skills</Text></Link>
              <Link href="/academic" asChild><Text style={styles.navLink}>Timeline</Text></Link>
              <Link href="/project" asChild><Text style={styles.navLink}>Projects</Text></Link>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.downloadBtn}>
                <Text style={styles.downloadBtnText}>Download CV</Text>
              </TouchableOpacity>
              <View style={styles.iconGroup}>
                 <Ionicons name="share-outline" size={20} color="white" style={styles.headerIcon} />
                 <Ionicons name="ellipsis-vertical" size={20} color="white" style={styles.headerIcon} />
              </View>
            </View>
          ) : (
            <TouchableOpacity>
              <Ionicons name="menu" size={28} color="white" />
            </TouchableOpacity>
          )}
        </View>

        {/* Hero Card Container */}
        <View style={styles.heroContainer}>
          <BlurView intensity={20} tint="dark" style={[styles.heroCard, !isLargeScreen && { padding: 25, borderRadius: 30 }]}>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}>
                <Ionicons name="code-slash-outline" size={14} color="#3B82F6" />
                <Text style={styles.badgeText}> FULL-STACK & VISUAL PRODUCTION</Text>
              </View>
            </View>

            <Text style={[styles.heroTitle, !isLargeScreen && { fontSize: 32, lineHeight: 40 }]}>
              ENGINEERING{'\n'}
              <Text style={styles.heroTitleAccent}>CREATIVITY</Text>
            </Text>

            <Text style={[styles.description, !isLargeScreen && { fontSize: 14, lineHeight: 20 }]}>
              Computer Science student at Binus University. Bridging the gap between robust backend architecture and immersive visual aesthetics through Go, Laravel, and AI-driven innovation.
            </Text>

            <View style={[styles.buttonGroup, !isLargeScreen && { flexDirection: 'column', width: '100%' }]}>
              <Link href="/project" asChild>
                <TouchableOpacity style={styles.primaryBtn}>
                  <Text style={styles.primaryBtnText}>Explore Projects</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/skills" asChild>
                <TouchableOpacity style={styles.secondaryBtn}>
                  <Text style={styles.secondaryBtnText}>View Expertise</Text>
                </TouchableOpacity>
              </Link>
            </View>

            <View style={styles.statsDivider} />

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>Go</Text>
                <Text style={styles.statLabel}>BACKEND CORE</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>3.8</Text>
                <Text style={styles.statLabel}>CURRENT GPA</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>AI</Text>
                <Text style={styles.statLabel}>TIERLOG SYSTEM</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>VJ</Text>
                <Text style={styles.statLabel}>VISUAL PRODUCTION</Text>
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
    paddingHorizontal: 25,
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
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  downloadBtnText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
  },
  iconGroup: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  headerIcon: {
    marginLeft: 15,
  },
  heroContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  heroCard: {
    width: '100%',
    maxWidth: 1000,
    borderRadius: 40,
    padding: isLargeScreen ? 50 : 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  badgeContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  badgeText: {
    color: '#3B82F6',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  heroTitle: {
    color: 'white',
    fontSize: isLargeScreen ? 64 : 36,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: isLargeScreen ? 72 : 44,
    letterSpacing: -1,
  },
  heroTitleAccent: {
    color: '#3B82F6',
  },
  description: {
    color: '#9CA3AF',
    fontSize: 17,
    textAlign: 'center',
    maxWidth: 650,
    marginTop: 25,
    lineHeight: 26,
    fontWeight: '400',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 45,
    gap: 15,
  },
  primaryBtn: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  primaryBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  statsDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginTop: 60,
    marginBottom: 40,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
    gap: 30,
  },
  statItem: {
    alignItems: 'center',
    minWidth: 120,
  },
  statValue: {
    color: '#3B82F6',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  statLabel: {
    color: '#6B7280',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginTop: 8,
  },
});