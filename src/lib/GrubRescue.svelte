<script>
	$effect(() => {
		const initTerminal = () => {
			const container = document.getElementById('vanilla-terminal');
			if (!container || container.innerHTML.trim() !== '') return;

			const term = new window.VanillaTerminal({
				welcome: "error: 'www.mudrock.dev' not found.<br>Entering rescue mode...",
				prompt: 'grub rescue',
				separator: '>',
				commands: {
					ls: (terminal) => {
						terminal.output('(hd0) (hd0,msdos1)');
						terminal.setPrompt('grub rescue>');
					},
					help: (terminal) => {
						terminal.output('Available commands: ls, help, clear');
					}
				}
			});

			term.onInput((command, parameters) => {
				console.log('⚡️onInput', command, parameters);
			});
		};

		if (window.VanillaTerminal) {
			initTerminal();
		} else {
			const script = document.createElement('script');
			script.src = '/vanilla-terminal.js';
			script.onload = initTerminal;
			document.head.appendChild(script);
		}
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/perfect-dos-vga-437" />
</svelte:head>

<div>
	<div class="h-screen w-screen" id="vanilla-terminal"></div>
</div>

<style>
	/* Target the terminal container and all its children to ensure the font applies everywhere */
	:global(.vanilla-terminal),
	:global(.vanilla-terminal *) {
		font-family: 'Perfect DOS VGA 437', monospace !important;
	}
</style>
