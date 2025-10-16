import { AfterPackContext } from "electron-builder"
import { execSync } from "node:child_process"
import path from "node:path"

export async function cleanupXattr(context: AfterPackContext) {
  const appPath = path.join(
    context.appOutDir,
    `${context.packager.appInfo.productFilename}.app`
  )

  console.log(`Removing extended attributes from ${appPath} to avoid Gatekeeper issues...`)
  try {
    execSync(`xattr -cr "${appPath}"`)
  } catch (err) {
    console.warn("xattr cleanup failed:", err)
  }
}
