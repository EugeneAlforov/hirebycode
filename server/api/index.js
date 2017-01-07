'use strict';

const router = require('express').Router();

router.use('/auth', require('../api/auth/auth.express'));
router.use('/repo', require('../api/repo/repo.express'));
router.use('/user', require('../api/user/user.express'));
router.use('/skills', require('../api/skills/skills.express'));
router.use('/developer', require('../api/developer/developer.express'));
router.use('/github-proxy', require('../api/github-proxy/github-proxy.express'));

module.exports = router;

