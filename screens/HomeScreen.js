import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

export default function HomeScreen() {
	return (
		<View className='flex-1 relative'>
			<StatusBar style='light' />
			<Image
				blurRadius={70}
				source={require('../assets/bg.jpg')}
				className='absolute h-full w-full'
			/>
			<SafeAreaView className='flex flex-1'>
				<View style={{ height: '7%' }} className='mx-4 relative z-50'>
					<View
						className='flex-row justify-end items-center rounded-full'
						style={{ backgroundColor: theme.bgWhite(0.2) }}
					>
						<TextInput
							placeholder='Search City'
							placeholderTextColor={'lightgray'}
						></TextInput>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}
