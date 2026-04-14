const { execSync } = require('child_process');

function log(msg) {
  console.log(`[LOG] ${new Date().toISOString()}: ${msg}`);
}

function run(cmd) {
  log(`Executing: ${cmd}`);
  try {
    return execSync(cmd).toString().trim();
  } catch (err) {
    log(`Error: ${err.message}`);
    log(`Output: ${err.stdout?.toString()}`);
    log(`Stderr: ${err.stderr?.toString()}`);
    throw err;
  }
}

async function verifyUpload() {
  console.log("\n--- UPLOAD SYSTEM VERIFICATION ---\n");
  
  try {
    // 1. Check local status
    log("Checking local Git status...");
    const status = run("git status --short");
    if (status) {
      log("Uncommitted changes found. Committing...");
      run("git add .");
      run('git commit -m "feat: sync latest changes from dist to root"');
    } else {
      log("No changes to commit.");
    }

    // 2. Perform Upload (Git Push)
    log("Performing Upload (Pushing to GitHub)...");
    const pushOutput = run("git push origin main 2>&1");
    log("Upload operation executed.");

    // 3. Verify on Server (Remote)
    log("Verifying remote head...");
    const localHash = run("git rev-parse HEAD");
    const remoteHash = run("git ls-remote origin main").split("\t")[0];
    
    if (localHash === remoteHash) {
      console.log("\n[SUCCESS] UPLOAD VERIFIED SUCCESSFULLY.");
      console.log(`[RESULT] Remote Head: ${remoteHash}`);
      console.log(`[RESULT] Local Head: ${localHash}`);
      console.log(`[STATUS] All files are now accessible on GitHub main branch.`);
    } else {
      throw new Error(`Hash mismatch! Local: ${localHash}, Remote: ${remoteHash}`);
    }

  } catch (err) {
    console.log("\n[ERROR] UPLOAD FAILED.");
    console.log(`[DETAIL] ${err.message}`);
    process.exit(1);
  }
}

verifyUpload();
