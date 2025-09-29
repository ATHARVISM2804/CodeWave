import React from 'react';
import { Award, Users, TrendingUp, Calendar } from 'lucide-react';

const stats = [
	{ icon: Award, label: 'Projects Completed', value: '50+' },
	{ icon: Calendar, label: 'Company Experience', value: '1 Year' },
	{ icon: Award, label: 'Clients', value: '60+ Happy Clients' },
	{ icon: Users, label: 'Happy Clients', value: '85+' },
	{ icon: TrendingUp, label: 'Success Rate', value: '98%' },
];

const MovingData: React.FC<{ speed?: number }> = ({ speed = 30 }) => {
	// speed is seconds for a full loop (larger = slower)
	const duration = `${Math.max(12, speed)}s`;

	return (
		<section aria-label="Company statistics" className="py-10">
			{/* Remove the fixed height bg-red-500 container that's causing clipping */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-20">
				<div
					className="moving-data relative px-4 sm:px-6 lg:px-8"
					// allow keyboard users to pause by focusing the container
					tabIndex={0}
					aria-roledescription="marquee"
				>
					{/* left/right dark gradient overlays */}
					<div aria-hidden className="moving-edge moving-edge-left"></div>
					<div aria-hidden className="moving-edge moving-edge-right"></div>
					<div
						className="moving-track flex items-stretch py-10"
						style={{ animationDuration: duration }}
					>
						{/* first copy */}
						{stats.map((s, i) => {
							const Icon = s.icon;
							return (
								<div key={`a-${i}`} className="min-w-[220px] mx-3">
									<div className="morph-card p-4 h-full flex items-center gap-4 hover:z-10 transition-all rounded-xl shadow-xl backdrop-blur-md transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
										style={{ 
											background: 'var(--card-bg)', 
											border: '1px solid var(--card-border)',
											boxShadow: '0 15px 30px rgba(var(--accent-primary-rgb), 0.08)'
										}}>
										<div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
											<div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
										</div>
										<div className="w-12 h-12 rounded-lg flex items-center justify-center relative z-10"
											style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}>
											<Icon className="w-6 h-6 text-white" />
										</div>
										<div className="relative z-10">
											<div className="text-lg font-bold text-nowrap" style={{ color: 'var(--text-primary)' }}>{s.value}</div>
											<div className="text-xs text-nowrap" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
										</div>
									</div>
								</div>
							);
						})}
						{/* second copy (for seamless looping) */}
						{stats.map((s, i) => {
							const Icon = s.icon;
							return (
								<div key={`b-${i}`} className="min-w-[220px] mx-3">
									<div className="morph-card p-4 h-full flex items-center gap-4 hover:z-10 transition-all rounded-xl shadow-xl backdrop-blur-md transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
										style={{ 
											background: 'var(--card-bg)', 
											border: '1px solid var(--card-border)',
											boxShadow: '0 15px 30px rgba(var(--accent-primary-rgb), 0.08)'
										}}>
										<div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
											<div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
										</div>
										<div className="w-12 h-12 rounded-lg flex items-center justify-center relative z-10"
											style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}>
											<Icon className="w-6 h-6 text-white" />
										</div>
										<div className="relative z-10">
											<div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{s.value}</div>
											<div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MovingData;
