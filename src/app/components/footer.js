

const Footer = () => {

    
    console.log("Footer is rendering...");
	return (
		<footer className='py-6 md:px-10 md:py-0 text-white bg-gradient-to-r from-[#041b40] to-[#070708] w-full' >
			<div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<a
						href='https://github.com/ace-Anuj'
						target='_blank'
						className='font-medium underline underline-offset-4'
					>
						Anuj
					</a>
					. The source code is available on{" "}
					<a
						href='https://github.com/ace-Anuj'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;