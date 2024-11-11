export const name: string = 'Harshwardhan Patil';

export const experience: Array<{ role: string, company: string, duration: string }> = [];

export const education: Array<{ institution: string, grade: number }> = [
	{
		institution: 'IIIT Sri City',
		grade: 9.56
	}
];

export const socials: {
	github: string;
	linkedin: string;
	discord: string;
} = {
	github: 'https://github.com/harsh-m-patil',
	linkedin: 'https://www.linkedin.com/in/harshmpatil',
	discord: 'https://discord.com/users/harshwardhan_patil'
};

export const skills: Array<{
	image: string;
	name: string;
    desc: string;
}> = [
	{
		image: '/typescript.svg',
		name: 'TypeScript',
        desc: 'JavaScript but more anoyying'
	},
	{
		image: '/java.svg',
		name: 'Java',
        desc: 'A Programming Language'
	},
	{
		image: '/go.svg',
		name: 'Go',
        desc: 'A Programming Language'
	},
	{
		image: '/react.svg',
		name: 'React',
        desc: 'A JavaScript Library'
	},
	{
		image: '/node.svg',
		name: 'Node.js',
        desc: 'A JS Runtime'
	},
	{
		image: '/express.svg',
		name: 'Express',
        desc: 'Web Framework for Node'
	},
	{
		image: '/mongodb.svg',
		name: 'MongoDB',
        desc: 'A NoSQL Database'
	}
];

export const projects: Array<{
	title: string;
	image: string;
	description: string;
	github: string;
	techStack: string[];
}> = [
	{
		title: 'WorkSphere',
		image: 'https://github.com/harsh-m-patil/WorkSphere/blob/main/assets/worksphere.png?raw=true',
		description:
			'A social platform for freelancers and clients to share projects, collaborate, and find work',
		github: 'https://github.com/harsh-m-patil/WorkSphere',
		techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind.css']
	},
	{
		title: 'EZStay',
		image: 'https://github.com/harsh-m-patil/EZStay/raw/stable/views/images/screenshots/index1.png',
		description: 'Online Hotel Booking Platform',
		github: 'https://github.com/harsh-m-patil/EZStay',
		techStack: ['JavaScript', 'EJS', 'Node.js', 'MongoDB', 'Express']
	},
	{
		title: 'GitTrack',
		image: 'https://github.com/harsh-m-patil/GitTrack/blob/main/assets/gitrack.png?raw=true',
		description:
			"A command-line tool to track and display a user's GitHub information directly in the terminal.",
		github: 'https://github.com/harsh-m-patil/GitTrack',
		techStack: ['Golang', 'Cobra', 'Github-API']
	}
];
