import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { theme } from '../theme/index';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
	const [showSearch, toggleSearch] = useState(false);

	return (
		<View className='relative flex-1'>
			<StatusBar style='light' />
			<Image
				blurRadius={70}
				source={require('../assets/bg.jpg')}
				className='absolute w-full h-full'
			/>
			<SafeAreaView className='flex flex-1'>
				<View style={{ height: '7%' }} className='relative z-50 mx-4'>
					<View
						className='flex-row items-center justify-end rounded-full'
						style={{
							backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent',
						}}
					>
						{showSearch ? (
							<TextInput
								placeholder='Search City'
								placeholderTextColor={'lightgray'}
								className='flex-1 h-10 pl-6 text-base text-white'
							/>
						) : null}
						<TouchableOpacity
							onPress={() => toggleSearch(!showSearch)}
							style={{ backgroundColor: theme.bgWhite(0.3) }}
							className='p-3 m-1 rounded-full'
						>
							<MagnifyingGlassIcon size={25} color='white' />
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}
