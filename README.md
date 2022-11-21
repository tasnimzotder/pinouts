# Pinouts

Interactive pinout diagrams for microcontrollers and other electronic components.

## Supported devices

- [NodeMCU v2 (ESP8266)](https://pinouts.vercel.app/board/nodemcu-v2)
- [Arduino Uno (ATmega328P)](https://pinouts.vercel.app/board/arduino-uno)
- [Raspberry Pi Zero 2 W (ARM Cortex-A53)](https://pinouts.vercel.app/board/raspberry-pi-zero-2-w)

## Contributing

If you want to add support for a new device (board), please follow these steps:

1. Create a new file in the `data/boards` directory, named after the device (e.g. `boardname.ts`). Check the rules below for the file name.
2. Add the device to the `data/boards.ts` file.
3. Add required data to the new file (see the other files for examples) and make sure it exports the `BoardType` interface. The interface is defined in `lib/interfaces/board.interface.ts`.
4. Run `npm run build` to to check if the new board is valid.
5. Open a pull request.

### File name

The file name should be the same as the device name, but with the following changes:

- The spaces should be replaced with dashes (`-`).
- All non-alphanumeric characters should be omitted.
- All letters should be lowercase.
- The file name should be unique.
- The file name should not contain any spaces.
- The id of the board should be the same as the file name.
- The file extension should be `.ts`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
