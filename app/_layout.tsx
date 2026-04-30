import { View, StyleSheet, Text, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { Stack, Link, usePathname } from "expo-router";
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 600;

  const navItems = [
    { icon: 'list', label: 'INDEX', href: '/' },
    { icon: 'person-outline', label: 'PROFILE', href: '/profil' },
    { icon: 'bar-chart-outline', label: 'SKILLS', href: '/skills' },
    { icon: 'calendar-outline', label: 'TIMELINE', href: '/academic' },
    { icon: 'grid-outline', label: 'PROJECTS', href: '/project' },
    { icon: 'at', label: 'CONTACT', href: '/contact' },
  ];

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
        
        {/* Persistent Bottom Navigation */}
        <View style={[styles.bottomNavContainer, isSmallScreen && { bottom: 20 }]}>
          <BlurView intensity={40} tint="dark" style={[styles.bottomNav, isSmallScreen && { paddingHorizontal: 15 }]}>
            {navItems.map((item) => {
              const active = (item.href === '/' && (pathname === '/' || pathname === '/index')) || pathname === item.href;
              
              return (
                <Link key={item.href} href={item.href as any} asChild>
                  <TouchableOpacity style={styles.navItem}>
                    <Ionicons 
                      name={(active ? item.icon.replace('-outline', '') : item.icon) as any} 
                      size={isSmallScreen ? 24 : 20} 
                      color={active ? '#3B82F6' : '#6B7280'} 
                    />
                    {!isSmallScreen && (
                      <Text style={[styles.navItemLabel, active && styles.activeNavItemLabel]}>
                        {item.label}
                      </Text>
                    )}
                  </TouchableOpacity>
                </Link>
              );
            })}
          </BlurView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080A0F',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 100,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'rgba(10, 14, 20, 0.7)',
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 45,
    width: '100%',
    maxWidth: 750,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    flex: 1,
  },
  navItemLabel: {
    color: '#6B7280',
    fontSize: 8,
    fontWeight: '800',
    marginTop: 6,
    letterSpacing: 0.5,
  },
  activeNavItemLabel: {
    color: '#3B82F6',
  }
});

