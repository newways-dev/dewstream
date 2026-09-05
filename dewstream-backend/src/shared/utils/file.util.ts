import { ReadStream } from 'fs'

export function validateFileFormat(
	filename: string,
	allowedFileFormats: string[]
) {
	const fileParts = filename.split('.')
	const extension = fileParts[fileParts.length - 1]

	return allowedFileFormats.includes(extension)
}

export async function validateFileSize(
	fileStream: ReadStream,
	allowedFileSizeInBytes: number
) {
	return new Promise((resolve, reject) => {
		let fileSizeInBytes = 0

		fileStream
			.on('data', (data: Buffer | string) => {
				fileSizeInBytes += Buffer.byteLength(data)
			})
			.on('end', () => {
				resolve(fileSizeInBytes <= allowedFileSizeInBytes)
			})
			.on('error', error => {
				reject(error)
			})
	})
}
