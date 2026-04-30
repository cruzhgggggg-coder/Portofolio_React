import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

export default function Academic() {
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
      
      <View style={[styles.blob, { top: -100, left: -100, backgroundColor: 'rgba(59, 130, 246, 0.05)' }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>ZAKY PORTFOLIO</Text>
          {isLargeScreen ? (
            <View style={styles.navLinks}>
              <Link href="/" asChild><Text style={styles.navLink}>Index</Text></Link>
              <Link href="/profil" asChild><Text style={styles.navLink}>Profile</Text></Link>
              <Link href="/skills" asChild><Text style={styles.navLink}>Skills</Text></Link>
              <Text style={[styles.navLink, styles.activeNavLink]}>Timeline</Text>
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
          <View style={styles.heroHeaderRow}>
              <View style={styles.titleContainer}>
                <Text style={styles.heroTitle}>Academic Foundation</Text>
                <Text style={styles.description}>
                  A journey of technical learning and academic growth focused on Computer Science and Full-stack development.
                </Text>
              </View>
              {isLargeScreen && (
                <View style={styles.timelineYearsContainer}>
                  <Text style={styles.timelineYears}>2012 — 2028</Text>
                  <Text style={styles.timelineSubText}>EDUCATION TIMELINE</Text>
                </View>
              )}
          </View>
        </View>

        {/* Timeline Content */}
        <View style={styles.timelineContainer}>
          <View style={styles.timelineLine} />

          {/* University Card */}
          <View style={styles.timelineEntry}>
            <View style={styles.timelineDot}>
                <Ionicons name="school-outline" size={18} color="white" />
            </View>
            <BlurView intensity={20} tint="dark" style={styles.academicCard}>
              <View style={[styles.cardHeader, !isLargeScreen && { flexDirection: 'column' }]}>
                <View style={styles.cardInfo}>
                  <View style={styles.postGradBadge}>
                    <Text style={styles.badgeText}>UNDERGRADUATE</Text>
                  </View>
                  <Text style={[styles.degreeTitle, !isLargeScreen && { fontSize: 20 }]}>Computer Science</Text>
                  <Text style={[styles.institution, !isLargeScreen && { fontSize: 16 }]}>Bina Nusantara University</Text>
                </View>
                <View style={[styles.cardDateLoc, !isLargeScreen && { alignItems: 'flex-start', marginTop: 15 }]}>
                   <Text style={styles.cardDate}>2024 — 2028</Text>
                   <Text style={styles.cardLocation}>Malang, Indonesia</Text>
                </View>
              </View>

              <View style={styles.cardDivider} />

              <View style={styles.cardDetailsRow}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>SPECIALIZATION</Text>
                  <Text style={styles.detailValue}>Full-stack Development</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>CURRENT PROJECT</Text>
                  <Text style={styles.detailValue}>TierLog (AI-Powered E-Logbook)</Text>
                </View>
                <View style={styles.detailItem}>
                  <View style={styles.focusContainer}>
                    <View style={styles.focusIconPlaceholder}>
                      <Ionicons name="code-slash" size={18} color="#3B82F6" />
                    </View>
                    <View>
                      <Text style={styles.detailLabel}>FOCUS</Text>
                      <Text style={styles.detailValue}>Fullstack Developer</Text>
                    </View>
                  </View>
                </View>
              </View>
            </BlurView>
          </View>

          {/* SMA Card */}
          <View style={styles.timelineEntry}>
            <View style={styles.timelineDot}>
                <Ionicons name="library-outline" size={18} color="white" />
            </View>
            <BlurView intensity={20} tint="dark" style={styles.academicCard}>
              <View style={[styles.cardHeader, !isLargeScreen && { flexDirection: 'column' }]}>
                <View style={styles.cardInfo}>
                  <View style={styles.underGradBadge}>
                    <Text style={styles.badgeText}>HIGH SCHOOL</Text>
                  </View>
                  <Text style={[styles.degreeTitle, !isLargeScreen && { fontSize: 20 }]}>Science Major</Text>
                  <Text style={[styles.institution, !isLargeScreen && { fontSize: 16 }]}>SMAK Kolese Santo Yusup</Text>
                </View>
                <View style={[styles.cardDateLoc, !isLargeScreen && { alignItems: 'flex-start', marginTop: 15 }]}>
                   <Text style={styles.cardDate}>Graduated 2024</Text>
                   <Text style={styles.cardLocation}>Malang, Indonesia</Text>
                </View>
              </View>
            </BlurView>
          </View>

          {/* SMP & SD Card (Combined for brevity) */}
          <View style={styles.timelineEntry}>
            <View style={styles.timelineDot}>
                <Ionicons name="book-outline" size={18} color="white" />
            </View>
            <BlurView intensity={20} tint="dark" style={styles.academicCard}>
              <Text style={styles.degreeTitle}>Earlier Education</Text>
              <Text style={styles.institution}>SMPK Kolese Santo Yusup (2019 — 2021)</Text>
              <Text style={[styles.institution, { marginTop: 10 }]}>SD Taman Harapan Malang (2012 — 2018)</Text>
            </BlurView>
          </View>
        </View>

        {/* Footer Stats */}
        <View style={styles.footerStatsContainer}>
           <BlurView intensity={10} tint="dark" style={[styles.footerStatsCard, !isLargeScreen && { flexDirection: 'column', gap: 25 }]}>
              <View style={styles.footerStatItem}>
                 <Text style={styles.footerStatValue}>3.8</Text>
                 <Text style={styles.footerStatLabel}>CURRENT GPA</Text>
              </View>
              {isLargeScreen && <View style={styles.footerStatDivider} />}
              <View style={styles.footerStatItem}>
                 <Text style={styles.footerStatValue}>Binus</Text>
                 <Text style={styles.footerStatLabel}>MALANG CAMPUS</Text>
              </View>
              {isLargeScreen && <View style={styles.footerStatDivider} />}
              <View style={styles.footerStatItem}>
                 <Text style={styles.footerStatValue}>S1</Text>
                 <Text style={styles.footerStatLabel}>DEGREE PROGRAM</Text>
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
  heroSection: {
    paddingHorizontal: 40,
    marginTop: 40,
    marginBottom: 40,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  heroHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleContainer: {
    borderLeftWidth: 3,
    borderLeftColor: '#3B82F6',
    paddingLeft: 20,
  },
  heroTitle: {
    color: 'white',
    fontSize: isLargeScreen ? 48 : 32,
    fontWeight: '900',
    marginBottom: 15,
  },
  description: {
    color: '#9CA3AF',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 500,
  },
  timelineYearsContainer: {
    alignItems: 'flex-end',
  },
  timelineYears: {
    color: '#3B82F6',
    fontSize: 32,
    fontWeight: '800',
  },
  timelineSubText: {
    color: '#6B7280',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 5,
  },
  timelineContainer: {
    paddingHorizontal: 40,
    position: 'relative',
    marginTop: 20,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  timelineLine: {
    position: 'absolute',
    left: isLargeScreen ? 65 : 58,
    top: 20,
    bottom: 20,
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  timelineEntry: {
    flexDirection: 'row',
    marginBottom: 35,
    position: 'relative',
  },
  timelineDot: {
    width: isLargeScreen ? 50 : 36,
    height: isLargeScreen ? 50 : 36,
    borderRadius: isLargeScreen ? 25 : 18,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: isLargeScreen ? 40 : 15,
    zIndex: 1,
  },
  academicCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.01)',
    borderRadius: 20,
    padding: isLargeScreen ? 30 : 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardInfo: {
    flex: 1,
  },
  postGradBadge: {
    backgroundColor: 'rgba(59, 130, 246, 0.12)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  underGradBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  badgeText: {
    color: '#3B82F6',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  degreeTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
  },
  institution: {
    color: '#9CA3AF',
    fontSize: 18,
    fontWeight: '600',
  },
  cardDateLoc: {
    alignItems: 'flex-end',
  },
  cardDate: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  cardLocation: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 5,
  },
  cardDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginVertical: 25,
  },
  cardDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 20,
  },
  detailItem: {
    minWidth: 180,
  },
  detailLabel: {
    color: '#4B5563',
    fontSize: 10,
    fontWeight: '800',
    marginBottom: 10,
    letterSpacing: 1,
  },
  detailValue: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },
  focusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  focusIconPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'rgba(59, 130, 246, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerStatsContainer: {
    paddingHorizontal: 40,
    marginTop: 30,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  footerStatsCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.01)',
    borderRadius: 25,
    padding: isLargeScreen ? 35 : 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    overflow: 'hidden',
  },
  footerStatItem: {
    alignItems: 'center',
  },
  footerStatValue: {
    color: '#3B82F6',
    fontSize: 36,
    fontWeight: '900',
  },
  footerStatLabel: {
    color: '#6B7280',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 10,
    letterSpacing: 1,
  },
  footerStatDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
});