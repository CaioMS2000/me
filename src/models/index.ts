export type Info = {
	fullName: string;
	location: {
		country: string;
		state: string;
		city: string;
	};
	emails: string[];
	phones: { phone: string; whatsApp: boolean }[];
};
