import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, useWindowDimensions, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

export default function Contact() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 1024;

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
      <View style={[styles.blob, { bottom: -100, right: -100, backgroundColor: 'rgba(139, 92, 246, 0.08)' }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>ZAKY PORTFOLIO</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.downloadLink}>
              <Text style={styles.downloadLinkText}>Download CV</Text>
            </TouchableOpacity>
            <Ionicons name="share-outline" size={20} color="white" style={styles.headerIcon} />
            <Ionicons name="ellipsis-vertical" size={20} color="white" style={styles.headerIcon} />
          </View>
        </View>

        {/* Main Content */}
        <View style={[styles.mainLayout, !isLargeScreen && { flexDirection: 'column', paddingHorizontal: 20 }]}>
          
          {/* Left Section */}
          <View style={[styles.leftSection, !isLargeScreen && { width: '100%', marginBottom: 40 }]}>
            <View style={styles.connectBadge}>
              <Text style={styles.connectBadgeText}>CONNECT</Text>
            </View>
            <Text style={styles.title}>
              Let's build the{'\n'}
              <Text style={styles.titleGradient}>next horizon</Text>{'\n'}
              together.
            </Text>
            <Text style={styles.description}>
              Open for collaboration on backend engineering, AI-driven solutions, and immersive visual production projects.
            </Text>
            
            <TouchableOpacity style={styles.scheduleBtn} onPress={() => Linking.openURL('mailto:manggazaky@gmail.com')}>
              <View style={styles.scheduleIconCircle}>
                <Ionicons name="mail-outline" size={20} color="white" />
              </View>
              <Text style={styles.scheduleText}>Get in touch</Text>
            </TouchableOpacity>
          </View>

          {/* Right Section: Contact Card */}
          <View style={[styles.rightSection, !isLargeScreen && { width: '100%' }]}>
            <BlurView intensity={15} tint="dark" style={styles.contactCard}>
              <View style={styles.cardContent}>
                
                {/* Email Row */}
                <ContactRow 
                  icon="at-outline" 
                  label="EMAIL" 
                  value="manggazaky@gmail.com" 
                  onPress={() => Linking.openURL('mailto:manggazaky@gmail.com')}
                />
                
                {/* GitHub Row */}
                <ContactRow 
                  icon="logo-github" 
                  label="GITHUB" 
                  value="github.com/cruzhgggggg-coder" 
                  onPress={() => Linking.openURL('https://github.com/cruzhgggggg-coder')}
                />
                
                {/* Instagram Row */}
                <ContactRow 
                  icon="logo-instagram" 
                  label="INSTAGRAM" 
                  value="@zaky_manggala" 
                  onPress={() => Linking.openURL('https://instagram.com/zaky_manggala')}
                />

                <View style={styles.cardFooter}>
                  <View style={styles.avatarGroup}>
                    <Image 
                      source={require('../assets/images/profile.png')} 
                      style={styles.footerAvatar} 
                    />
                    <View style={styles.initialsBadge}>
                      <Text style={styles.initialsText}>ZK</Text>
                    </View>
                  </View>
                  <Text style={styles.availabilityText}>Available for 2026 collaborations</Text>
                </View>
              </View>
            </BlurView>
          </View>

        </View>

      </ScrollView>
    </View>
  );
}

function ContactRow({ icon, label, value, onPress }: { icon: string; label: string; value: string; onPress: () => void }) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 1024;
  const styles = getStyles(isLargeScreen);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <BlurView intensity={10} tint="dark" style={styles.rowWrapper}>
        <View style={styles.rowIconContainer}>
          <Ionicons name={icon as any} size={24} color="#3B82F6" />
        </View>
        <View style={styles.rowTextContainer}>
          <Text style={styles.rowLabel}>{label}</Text>
          <Text style={styles.rowValue}>{value}</Text>
        </View>
        <Ionicons name="open-outline" size={20} color="rgba(255,255,255,0.3)" />
      </BlurView>
    </TouchableOpacity>
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
    width: 500,
    height: 500,
    borderRadius: 250,
    opacity: 0.15,
  },
  scrollContent: {
    paddingBottom: 150,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    width: '100%',
  },
  logoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadLink: {
    marginRight: 20,
  },
  downloadLinkText: {
    color: '#3B82F6',
    fontSize: 13,
    fontWeight: '700',
  },
  headerIcon: {
    marginLeft: 15,
    opacity: 0.8,
  },
  mainLayout: {
    flexDirection: 'row',
    paddingHorizontal: isLargeScreen ? 60 : 25,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    gap: isLargeScreen ? 80 : 0,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  leftSection: {
    width: isLargeScreen ? '45%' : '100%',
  },
  connectBadge: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  connectBadgeText: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    color: 'white',
    fontSize: isLargeScreen ? 64 : 40,
    fontWeight: '900',
    lineHeight: isLargeScreen ? 72 : 48,
    marginBottom: 30,
    letterSpacing: -1.5,
  },
  titleGradient: {
    color: '#3B82F6',
  },
  description: {
    color: '#9CA3AF',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 50,
    fontWeight: '500',
    maxWidth: 450,
  },
  scheduleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  scheduleIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scheduleText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
  rightSection: {
    width: isLargeScreen ? '50%' : '100%',
    alignItems: isLargeScreen ? 'flex-end' : 'center',
  },
  contactCard: {
    width: '100%',
    maxWidth: 550,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
    padding: 30,
  },
  cardContent: {
    gap: 20,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: isLargeScreen ? 24 : 16,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  rowIconContainer: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: 'rgba(59, 130, 246, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  rowTextContainer: {
    flex: 1,
  },
  rowLabel: {
    color: '#6B7280',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 5,
  },
  rowValue: {
    color: 'white',
    fontSize: isLargeScreen ? 18 : 14,
    fontWeight: '700',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: -10,
    zIndex: 2,
    borderWidth: 2,
    borderColor: '#0F1219',
  },
  initialsBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  initialsText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0,
  },
  availabilityText: {
    color: '#4B5563',
    fontSize: 11,
    fontWeight: '600',
    fontStyle: 'italic',
  },
});