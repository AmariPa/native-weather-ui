import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { theme } from '../theme/index';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { MapPinIcon, CalendarDaysIcon } from 'react-native-heroicons/solid';

export default function HomeScreen() {
	const [showSearch, toggleSearch] = useState(false);
	const [locations, setLocations] = useState([1, 2, 3]);

	const handleLocation = (loc) => {
		console.log('location: ', loc);
	};

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
					{locations.length > 0 && showSearch ? (
						<View className='absolute w-full bg-gray-300 top-16 rounded-3xl'>
							{locations.map((loc, index) => {
								let showBorder = index + 1 != locations.length;
								let borderClass = showBorder
									? 'border-b-2 border-b-gray-400'
									: '';
								return (
									<TouchableOpacity
										onPress={() => handleLocation(loc)}
										key={index}
										className={
											'flex-row items-center border-0 p-3 px-4 mb-1' +
											borderClass
										}
									>
										<MapPinIcon size={20} color='gray' />
										<Text className='ml-2 text-lg text-black'>
											Osaka, Japan
										</Text>
									</TouchableOpacity>
								);
							})}
						</View>
					) : null}
				</View>
				{/* forecast */}
				<View className='flex justify-around flex-1 mx-4 mb-2'>
					{/* location */}
					<Text className='text-2xl font-bold text-center text-white'>
						Osaka,
						<Text className='text-lg font-semibold text-gray-300'>Japan</Text>
					</Text>
					{/* weather pic */}
					<View className='flex-row justify-center'>
						<Image
							source={require('../assets/partly-cloudy.png')}
							className='w-52 h-52'
						/>
					</View>
					{/* degrees */}
					<View className='space-y-2'>
						<Text className='ml-5 text-6xl font-bold text-center text-white'>
							23&#176;
						</Text>
						<Text className='text-xl tracking-widest text-center text-white'>
							Partly Cloudy
						</Text>
					</View>
					{/* other */}
					<View className='flex-row justify-between mx-4'>
						<View className='flex-row items-center space-x-2'>
							<Image
								source={require('../assets/wind.png')}
								className='w-6 h-6'
							/>
							<Text className='text-base font-semibold text-white'>22m/ph</Text>
						</View>
						<View className='flex-row items-center space-x-2'>
							<Image
								source={require('../assets/drop.png')}
								className='w-6 h-6'
							/>
							<Text className='text-base font-semibold text-white'>20%</Text>
						</View>
						<View className='flex-row items-center space-x-2'>
							<Image
								source={require('../assets/sun.png')}
								className='w-6 h-6'
							/>
							<Text className='text-base font-semibold text-white'>
								10:02 AM
							</Text>
						</View>
					</View>
				</View>
				{/* Daily Forecast */}
				<View className='mb-2 space-y-3'>
					<View className='flex-row items-center mx-5 space-x-2'>
						<CalendarDaysIcon size={22} color='white' />
						<Text className='text-base text-white'>Daily Forecast</Text>
					</View>
					<ScrollView
						horizontal
						contentContainerStyle={{ paddingHorizontal: 15 }}
						showsHorizontalScrollIndicator={false}
					>
						<View
							className='flex items-center justify-center w-24 py-3 mr-4 space-y-1 rounded-3xl'
							style={{ backgroundColor: theme.bgWhite(0.15) }}
						>
							<Image
								source={require('../assets/heavy-rain.png')}
								className='h-11 w-11'
							/>
							<Text className='text-white'>Monday</Text>
							<Text className='text-xl font-semibold text-white'>13&#176;</Text>
						</View>
						<View
							className='flex items-center justify-center w-24 py-3 mr-4 space-y-1 rounded-3xl'
							style={{ backgroundColor: theme.bgWhite(0.15) }}
						>
							<Image
								source={require('../assets/heavy-rain.png')}
								className='h-11 w-11'
							/>
							<Text className='text-white'>Tuesday</Text>
							<Text className='text-xl font-semibold text-white'>10&#176;</Text>
						</View>
						<View
							className='flex items-center justify-center w-24 py-3 mr-4 space-y-1 rounded-3xl'
							style={{ backgroundColor: theme.bgWhite(0.15) }}
						>
							<Image
								source={require('../assets/heavy-rain.png')}
								className='h-11 w-11'
							/>
							<Text className='text-white'>Wednsday</Text>
							<Text className='text-xl font-semibold text-white'>25&#176;</Text>
						</View>
						<View
							className='flex items-center justify-center w-24 py-3 mr-4 space-y-1 rounded-3xl'
							style={{ backgroundColor: theme.bgWhite(0.15) }}
						>
							<Image
								source={require('../assets/heavy-rain.png')}
								className='h-11 w-11'
							/>
							<Text className='text-white'>Thursday</Text>
							<Text className='text-xl font-semibold text-white'>13&#176;</Text>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		</View>
	);
}
